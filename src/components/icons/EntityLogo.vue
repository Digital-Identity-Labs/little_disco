<script setup>

const props = defineProps(['service', 'size'])
import { inject } from 'vue'

const appConfig = inject('appConfig')

const service = props.service
const style = props.size == 'small' ? 'max-width:16px;width:100%' : 'max-width:64px;width:100%';


</script>

<template>

  <img v-if="service.logo_url" :src="service.logo_url" class="img-thumbnail"
       :style="style" />

</template>
