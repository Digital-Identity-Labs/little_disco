<script setup>
import DestinationCard from '@/components/DestinationSelector/DestinationCard.vue'
import { inject } from 'vue'
import * as menuStrategy from '../utils/menu.js'
import ErrorMessage from '@/components/ErrorMessage.vue'

const appConfig = inject('appConfig')
const discoDestination = inject('discoDestination')

discoDestination.value = null

const destinations = menuStrategy.is(appConfig.menu_provider_type)

const servicesData = destinations.listServices(appConfig)

if (appConfig.index_mode === 'redirect' && appConfig.index_redirection_url) {
  // Change title here too, to "redirecting"?
  console.log(`Redirecting from index to ${appConfig.index_redirection_url}...`)
  window.location.href = appConfig.index_redirection_url
}

</script>

<template>

  <template v-if="appConfig.index_mode === 'error'">
    <ErrorMessage error-message="Unspecified destination, no entityID parameter has been set"/>
  </template>

  <template v-if="appConfig.index_mode === 'menu' && appConfig.simple_menu === true">
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

</template>
