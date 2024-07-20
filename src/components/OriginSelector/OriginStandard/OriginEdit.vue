<script setup>
import { inject, watch } from 'vue'
import { computed } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import { useFavouriteOriginIDsStore } from '@/stores/favourite_origin_ids.js'
import IconDelete from '@/components/icons/IconDelete.vue'
import router from '@/router/index.js'
const props = defineProps(['request', 'destination'])

const favStore = useFavouriteOriginIDsStore()

const servicesData = inject('servicesData')

const favouriteServices = computed(() => {
    const selection = favStore.favouriteIDs.map((id) => servicesData.get(id))
    return selection.filter((val) => val !== null && val !== undefined)
  }
)
watch(favouriteServices, (newFavouriteServices) => {
  if (newFavouriteServices.length === 0) {
    console.log('All my favourites gone')
    router.go(0);
  }
})

function reset() {
    favStore.$reset();
}

</script>

<template>

  <div class="card-header">
    <h3 class="card-title">Edit Favourites</h3>
  </div>
  <div class="list-group list-group-flush list-group-hoverable">

    <OriginItem
      v-for="(service) in favouriteServices"
      :service="service"
      :request="props.request"
      :destination="props.destination"
      :key="service.id"
      mode="edit"
    />

  </div>

  <div class="card-footer position-absolute bottom-0 end-0">
    <div class="d-flex">
      <a @click="reset()" href="#" class="btn btn-danger ms-auto"><IconDelete/> Remove all</a>
    </div>
  </div>

</template>
