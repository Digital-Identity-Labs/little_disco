<script setup>
import DestinationCard from '@/components/DestinationSelector/DestinationCard.vue'

import * as sp from '../utils/sp'
import * as destinations from '../utils/destinations.js'

import { inject, shallowRef } from 'vue'

const appConfig = inject('appConfig');
const discoDestination = inject('discoDestination');

discoDestination.value = null;

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
