<script setup>


import { inject, ref } from 'vue'
import { reactive, computed } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'

const props = defineProps(['request', 'destination'])

const appConfig = inject('appConfig')
const expertMode = inject('expertMode')
const em = reactive(expertMode.value)


const favouriteServices = inject('favouriteServices')


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
      :expertMode="em"
      item-mode="edit"
    />

  </div>

</template>
