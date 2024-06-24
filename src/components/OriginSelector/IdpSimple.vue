<script setup>


import { inject } from 'vue'
import IdPItem from '@/components/OriginSelector/IdpItem.vue'
import * as origins from '@/utils/origins.js'

const props = defineProps(['request', 'destination'])

const appConfig = inject('appConfig');

const servicesData = origins.listServices(appConfig);

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

            <IdPItem
              v-for="(service) in servicesData"
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
