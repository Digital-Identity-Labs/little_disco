<script setup>

console.log('Passive Discovery has been requested by the SP');

import { useRoute } from 'vue-router'
import { inject, ref, computed } from 'vue'
import * as redirector from '@/utils/redirector.js'
import * as destinations from '../utils/destinations.js'
import * as discoRequest from '@/utils/disco_request.js'
import { useFavouriteOriginIDsStore } from '@/stores/favourite_origin_ids.js'
import * as originsStrategy from '@/utils/origins.js'
import ErrorMessage from '@/components/ErrorMessage.vue'

const appConfig = inject('appConfig')
const favStore = useFavouriteOriginIDsStore()

const errorMsg = ref('')
const isError = computed(() => errorMsg.value !== '');

const route = useRoute()
const queryParams = route.query

try {
  const request = discoRequest.parseRequest(queryParams, {})
  const origins = originsStrategy.is(appConfig.df_provider_type)
  const servicesData = await origins.listServices(appConfig)
  const destination = destinations.lookupService(request.entityID, appConfig)
  const favouriteServices = computed( () => favStore.favouriteIDs.map((id) => servicesData.get(id)))
  const passiveService = favouriteServices.value[0];
  const url = redirector.buildPassiveReturnURL(passiveService, request, destination, appConfig);
  console.log(`Redirecting to ${url}...`)
  window.location.href = url;
} catch (error) {
  console.error(error);
  errorMsg.value = error;
}

</script>

<template>
  <ErrorMessage v-if="isError" :error-message="errorMsg"></ErrorMessage>
  <p v-else></p>
</template>
