<script setup>
import DestinationSelector from '@/components/DestinationSelector.vue'
import OriginSelector from '@/components/OriginSelector.vue'

import { useRoute } from 'vue-router'
import * as discoRequest from '@/utils/disco_request.js'

const route = useRoute()
const queryParams = route.query
const request = discoRequest.parseRequest(queryParams, {})
const title = request.homeMode === 'origin' ? 'Select Your Institution' : 'Services'

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
    <OriginSelector v-if="request.homeMode === 'origin'" :request="request" />
    <DestinationSelector v-else />
  </suspense>

</template>
