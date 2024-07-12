<script setup>


import { inject, ref } from 'vue'
import { reactive, computed } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import * as filters from '@/utils/service_filter.js'
import { useStorage } from '@vueuse/core'
import { useFavouriteOriginIDsStore } from '@/stores/favourite_origin_ids.js'

const props = defineProps(['request', 'destination'])

const appConfig = inject('appConfig')

const favStore = useFavouriteOriginIDsStore()

const servicesData = inject('servicesData')

const favouriteServices = computed( () => favStore.favouriteIDs.map((id) => servicesData.get(id)))

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
    />

  </div>


</template>
