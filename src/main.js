import './assets/main.css'
import '@tabler/core'

import * as defaultConfig from "@/utils/default_config";
import * as backend from '@/utils/backend'

import { createApp, provide, ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//app.use(createPinia())
app.use(createPinia())
app.use(router)

const userConfig = await backend.fetchData(import.meta.env.BASE_URL + 'ld_config.json');
const appConfig = defaultConfig.merge(userConfig);
app.provide('appConfig', appConfig);

const initialEM = appConfig.em_default;
const expertMode = ref(initialEM);
app.provide('expertMode', expertMode);

app.mount('#app')