<script setup>
import ServiceCard from '@/components/ServiceSelector/ServiceCard.vue'

import * as sp from '../utils/sp'
import * as services from '../utils/services.js'

import { inject } from 'vue'

const appConfig = inject('appConfig');

const servicesData = services.listServices(appConfig);

console.log(servicesData);

</script>

<template>

  <div class="container-xl">
    <div class="row row-cards">



        <ServiceCard
          v-for="(service) in servicesData"
          :service="service"
          :key="service.id"
        />



    </div>
  </div>

</template>
