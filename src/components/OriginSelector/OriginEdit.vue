<script setup>


import { inject } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'
const props = defineProps(['request', 'destination', 'servicesData'])
const appConfig = inject('appConfig');

</script>

<template>

  <div class="card-header">
    <h3 class="card-title">Edit</h3>
  </div>
  <div class="list-group list-group-flush list-group-hoverable">

    <OriginItem
      v-for="(service) in servicesData"
      :service="service"
      :request="props.request"
      :destination="props.destination"
      :key="service.id"
      :expertMode="expertMode"
    />

  </div>

</template>
