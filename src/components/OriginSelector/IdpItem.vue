<script setup>

import EntityLogo from '@/components/icons/EntityLogo.vue'
import { inject } from 'vue'

const props = defineProps(['service', 'config'])

const service = props.service
const appConfig = inject('appConfig');

</script>

<template>

  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col-auto">
        <EntityLogo :service="service" :config="appConfig"/>
      </div>
      <div class="col text-truncate">
        <a href="#" class="text-reset d-block">{{ service.name || service.id }}</a>
        <div class="d-block text-secondary text-truncate mt-n1">{{ service.description }}
        </div>
      </div>
      <div class="col-auto">
        <a href="#" class="list-group-item-actions"><!-- Download SVG icon from http://tabler-icons.io/i/star -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      </div>
    </div>
  </div>


</template>
