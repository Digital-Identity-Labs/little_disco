<script setup>
import EntityLogo from '@/components/icons/EntityLogo.vue'
const props = defineProps(['service'])
import { inject } from 'vue'

const appConfig = inject('appConfig')

const service = props.service

</script>

<template>

  <button class="btn btn-outline-info w-50">{{ service.name || service.id }} &nbsp; <EntityLogo :service="service" :config="appConfig" size="small"/></button>


  <div class="col-md-6 col-xl-3">
    <a class="card card-link" href="#">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <div class="font-weight-medium">Kellie Skingley</div>
            <div class="text-secondary">Teacher</div>
          </div>
          <div class="col-auto">
            <EntityLogo :service="service" :config="appConfig" />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
