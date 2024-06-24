<script setup>
import DestinationCard from '@/components/DestinationSelector/DestinationCard.vue'

import * as sp from '../utils/sp'
import * as destinations from '../utils/destinations.js'

import { inject } from 'vue'

const appConfig = inject('appConfig');

const servicesData = destinations.listServices(appConfig);

</script>

<template>

  <div class="container-xl">
    <div class="row row-cards">

        <DestinationCard
          v-for="(service) in servicesData"
          :service="service"
          :key="service.id"
        />

    </div>
  </div>

</template>
