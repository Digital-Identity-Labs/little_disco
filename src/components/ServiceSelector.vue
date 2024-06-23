<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

import * as sp from '../utils/sp'

import { inject } from 'vue'

const appConfig = inject('appConfig');

</script>

<template>

  <div class="container-xl">
    <div class="row row-cards">

      <div class="col-md-6">
        <ServiceCard/>
      </div>

    </div>
  </div>

</template>
