<script setup>


import { inject, ref } from 'vue'
import { reactive, computed } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import * as filters from '@/utils/service_filter.js'
import { useStorage } from '@vueuse/core'

const props = defineProps(['request', 'destination'])

const appConfig = inject('appConfig')
const expertMode = inject('expertMode')
const em = reactive(expertMode.value)
const favourites = inject('favouriteIDs')
const favouriteServices = inject('favouriteServices')

</script>

<template>


  <div class="card-header">
    <h3 class="card-title">Favourites</h3>
  </div>
  <div class="list-group list-group-flush list-group-hoverable">

    <OriginItem
      v-for="(service) in favouriteServices"
      :service="service"
      :request="props.request"
      :destination="props.destination"
      :key="service.id"
      :favourites="favourites"
      :expertMode="expertMode"
    />

  </div>


</template>
