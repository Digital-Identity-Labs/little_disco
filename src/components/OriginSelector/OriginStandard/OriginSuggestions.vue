<script setup>


import { inject, ref } from 'vue'
import { reactive, computed } from 'vue'
import { useGeolocation } from '@vueuse/core'

import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import * as filters from '@/utils/service_filter.js'
import * as suggestionEngine from '@/utils/suggestion_engine.js'
import * as originsStrategy from '@/utils/origins.js'
import * as netStrategy from '@/utils/network.js'

const props = defineProps(['request', 'destination', 'servicesData'])

const appConfig = inject('appConfig')
const expertMode = inject('expertMode')
const em = reactive(expertMode.value)

//const servicesData =  [];
if (appConfig.request_geo) {
  const { coords } = useGeolocation()
}

const netService = netStrategy.is(appConfig.net_provider_type);
const ipAddress = await netService.getIPAddress(appConfig);

console.log("Address!")
console.log(ipAddress);

const suggestedServices = suggestionEngine.initialSuggestionList(props.servicesData, '', null, appConfig)




</script>

<template>


  <div class="card-header">
    <h3 class="card-title">Suggestions</h3>
  </div>
  <div class="list-group list-group-flush list-group-hoverable">

    <OriginItem
      v-for="(service) in suggestedServices"
      :service="service"
      :request="props.request"
      :destination="props.destination"
      :key="service.id"
      :expertMode="expertMode"
    />

  </div>


</template>
