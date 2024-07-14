<script setup>

import { inject } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import * as suggestionEngine from '@/utils/suggestion_engine.js'
import * as geoLocation from '@/utils/geolocation.js'
import * as originsStrategy from '@/utils/origins.js'
import * as netStrategy from '@/utils/network.js'
import IconSearch from '@/components/icons/IconSearch.vue'
import { getOriginIDs } from '@/utils/cdcookie.js'


const props = defineProps(['request', 'destination'])

const appConfig = inject('appConfig')

const geo = await geoLocation.getLocation(appConfig)

const netService = netStrategy.is(appConfig.net_provider_type)
const ipAddress = await netService.getIPAddress(appConfig)
const cookieIDs = getOriginIDs(appConfig)
const servicesData = inject('servicesData')

const suggestedServices = suggestionEngine.initialSuggestionList(servicesData, {
  ip: ipAddress,
  geo: geo,
  cdc: cookieIDs
}, appConfig)

function toSearch() {

  const searchTabPane = document.querySelector('#tab-bottom-2')
  const otherTabPanes = [document.querySelector('#tab-bottom-1'), document.querySelector('#tab-bottom-3')]
  searchTabPane.classList.add('active', 'show')
  otherTabPanes.forEach((id) => id.classList.remove('active', 'show'))

  const searchTab = document.querySelector('#tl2')
  const otherTabs = [document.querySelector('#tl1'), document.querySelector('#tl3')]
  searchTab.classList.add('active')
  otherTabs.forEach((id) => id.classList.remove('active'))

}

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
    />

  </div>

  <div class="card-footer position-absolute bottom-0 end-0">
    <div class="d-flex">
      <a @click="toSearch()" class="btn btn-primary ms-auto">
        <IconSearch />&nbsp;Search for your institution</a>
    </div>
  </div>

</template>
