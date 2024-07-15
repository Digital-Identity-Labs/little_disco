import './assets/main.css'
import '@tabler/core'

import Plausible from 'plausible-tracker'
import { errorHandler } from "@appsignal/vue";
import Appsignal from "@appsignal/javascript"



import * as defaultConfig from '@/utils/default_config'
import * as backend from '@/utils/backend'

import { createApp, provide, ref } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

const userConfig = await backend.fetchData(import.meta.env.BASE_URL + 'ld_config.json')
const appConfig = defaultConfig.merge(userConfig)
app.provide('appConfig', appConfig)

const initialEM = appConfig.em_default
const expertMode = ref(initialEM)
app.provide('expertMode', expertMode)

const discoDestination = ref(null)
app.provide('discoDestination', discoDestination)

if (appConfig.use_plausible === true) {

  const { enableAutoPageviews } = Plausible({
    domain: appConfig.plausible_domain || location.hostname
  })

  enableAutoPageviews()

}

if (appConfig.use_appsignal === true) {
 const appsignal = new Appsignal({key: appConfig.appsignal_key})
  app.config.errorHandler = errorHandler(appsignal, app);
}

app.mount('#app')