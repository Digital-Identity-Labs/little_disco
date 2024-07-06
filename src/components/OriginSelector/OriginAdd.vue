<script setup>


import { inject } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'

const appConfig = inject('appConfig');

const props = defineProps(['request', 'destination', 'servicesData'])

</script>

<template>

  <div class="card-header">
    <h3 class="card-title">Search &amp; Add</h3>
  </div>
  <div class="list-group list-group-flush list-group-hoverable">

    <div class="card-body">

      <div class="mb-3">
        <div class="form-label">Search</div>
        <input type="text" autocomplete="organization url email" class="form-control">
      </div>

      <div class="mb-3">
        <!--<div class="form-label">Single switch</div>-->
        <label class="form-check form-switch">
          <input class="form-check-input" type="checkbox">
          <span class="form-check-label">Remember as a favourite</span>
        </label>
      </div>

    </div>

  </div>

</template>
