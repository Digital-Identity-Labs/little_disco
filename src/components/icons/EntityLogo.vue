<script setup>

const props = defineProps(['service', 'config'])
import { inject } from 'vue'

const appConfig = inject('appConfig')

const service = props.service

</script>

<template>

  <img v-if="service.logo_url" :src="service.logo_url" class="img-thumbnail"
       style="max-width:64px;width:100%" />

</template>
