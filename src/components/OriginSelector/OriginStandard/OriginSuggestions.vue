<script setup>


import { inject, ref } from 'vue'
import { reactive, computed } from 'vue'
import { useGeolocation } from '@vueuse/core'

import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import * as filters from '@/utils/service_filter.js'
import * as suggestionEngine from '@/utils/suggestion_engine.js'
import * as geoLocation from '@/utils/geolocation.js'
import * as originsStrategy from '@/utils/origins.js'
import * as netStrategy from '@/utils/network.js'

const props = defineProps(['request', 'destination'])

const appConfig = inject('appConfig')

//const servicesData =  [];
const geo = await geoLocation.getLocation(appConfig);

const netService = netStrategy.is(appConfig.net_provider_type)
const ipAddress = await netService.getIPAddress(appConfig)

const servicesData = inject('servicesData')

const suggestedServices = suggestionEngine.initialSuggestionList(servicesData, { ip: ipAddress, geo: geo}, appConfig)

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
