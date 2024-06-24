<script setup>
import DestinationSelector from '@/components/DestinationSelector.vue'
import OriginSelector from '@/components/OriginSelector.vue'

import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const queryParams = route.query

const homeMode = queryParams.entityID ? 'origin' : 'destination'
const title = homeMode == 'disco' ? 'Select Your Institution' : 'Services'

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
    <OriginSelector v-if="homeMode === 'origin'" :query-params="queryParams" />
    <DestinationSelector v-else />
  </suspense>

</template>
