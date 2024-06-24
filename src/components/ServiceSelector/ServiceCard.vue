<script setup>
import EntityLogo from '@/components/icons/EntityLogo.vue'
const props = defineProps(['service'])
import { inject } from 'vue'

const appConfig = inject('appConfig')

const service = props.service

</script>

<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <div>
          <div class="row align-items-center">
            <div class="col-auto">

              <EntityLogo :service="service" :config="appConfig"/>

            </div>
            <div class="col">
              <div :title="service.id" class="card-title">{{ service.name || service.id }}</div>
              <div v-if="service.org_name" class="card-subtitle">By <a v-if="service.org_url"
                                                                       :href="service.org_url">{{ service.org_name }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <a v-if="service.login_url" :href="service.login_url" class="btn btn-primary ms-auto">Access >></a>
        </div>
      </div>
      <div class="card-body">
        <p class="text-secondary">{{ service.description }}</p>
      </div>
      <div class="card-footer">
        <div class="d-flex">
          <a v-if="service.privacy_url" :href="service.privacy_url" class="btn btn-link">Privacy Policy</a>
          <a v-if="service.info_url" :href="service.info_url" class="btn btn-link">More Information</a>

        </div>
      </div>
    </div>
  </div>

</template>
