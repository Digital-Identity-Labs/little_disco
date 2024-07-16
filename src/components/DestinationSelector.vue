<script setup>
import DestinationCard from '@/components/DestinationSelector/DestinationCard.vue'
import { inject } from 'vue'
import * as menuStrategy from '../utils/menu.js'



const appConfig = inject('appConfig');
const discoDestination = inject('discoDestination');

discoDestination.value = null;

const destinations = menuStrategy.is(appConfig.dest_provider_type)

const servicesData = destinations.listServices(appConfig);

</script>

<template>

  <div class="container-xl">
    <div class="row row-cards">

        <DestinationCard
          v-for="(service) in servicesData"
          :service="service"
          :access="true"
          :key="service.id"
          :big="false"
        />

    </div>
  </div>

</template>
