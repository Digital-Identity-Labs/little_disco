<script setup>

import { inject } from 'vue'
import { computed } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import { useFavouriteOriginIDsStore } from '@/stores/favourite_origin_ids.js'

const props = defineProps(['request', 'destination'])
const favStore = useFavouriteOriginIDsStore()
const servicesData = inject('servicesData')
const favouriteServices = computed(() => {
    const selection = favStore.favouriteIDs.map((id) => servicesData.get(id))
    return selection.filter((val) => val !== null && val !== undefined)
  }
)

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
