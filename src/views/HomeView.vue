<script setup>
import ServiceSelector from '@/components/ServiceSelector.vue'
import InstitutionSelector from '@/components/InstitutionSelector.vue'

import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const queryParams = route.query

const homeMode = queryParams.entityID ? 'disco' : 'services'
const title = homeMode == 'disco' ? 'Institutions Selector' : 'Services'

</script>

<template>
  <div class="page-header d-print-none">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <h2 class="page-title">
            {{ title }}
          </h2>
        </div>
      </div>
    </div>
  </div>

  <br />

  <suspense>
    <InstitutionSelector v-if="homeMode === 'disco'" :query-params="queryParams" />
    <ServiceSelector v-else />
  </suspense>

</template>
