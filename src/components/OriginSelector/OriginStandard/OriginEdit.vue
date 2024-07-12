<script setup>


import { inject, ref } from 'vue'
import { reactive, computed } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import { useFavouriteOriginIDsStore } from '@/stores/favourite_origin_ids.js'
import IconDelete from '@/components/icons/IconDelete.vue'
const props = defineProps(['request', 'destination'])

const appConfig = inject('appConfig')

const favStore = useFavouriteOriginIDsStore()

const servicesData = inject('servicesData')

const favouriteServices = computed( () => favStore.favouriteIDs.map((id) => servicesData.get(id)))


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

  <div class="card-footer">
    <div class="d-flex">

      <a @click="reset()" href="#" class="btn btn-danger ms-auto"><IconDelete/> Remove all</a>
    </div>
  </div>


</template>
