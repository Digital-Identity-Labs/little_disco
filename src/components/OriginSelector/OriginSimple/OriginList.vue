<script setup>

import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import { useFavouriteOriginIDsStore } from '@/stores/favourite_origin_ids.js'
import { computed, inject, watch } from 'vue'
import router from '@/router/index.js'

const props = defineProps(['request', 'destination']);
const appConfig = inject('appConfig')

const servicesData = inject('servicesData')
const filteredServicesData = Array.from(servicesData.values()).slice(0, appConfig.max_simple);

</script>

<template>

  <div class="col-md-6">
    <div class="row row-cards">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Available Institutions</h3>
          </div>
          <div class="list-group list-group-flush list-group-hoverable">
            <OriginItem
              v-for="(service) in filteredServicesData"
              :service="service"
              :request="props.request"
              :destination="props.destination"
              :key="service.id"
            />

          </div>
        </div>
      </div>
    </div>
  </div>

</template>
