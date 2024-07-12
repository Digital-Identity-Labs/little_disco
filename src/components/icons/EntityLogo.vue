<script setup>

const props = defineProps(['service', 'size'])
import { inject } from 'vue'
import * as logo from '../../utils/logo_utils.js';

const appConfig = inject('appConfig')
const service = props.service
const style = logo.style(props.size);

const defaultImageURL = appConfig.default_image_url;
const serviceURL = service.logo || service.logo_url;

function errorImage(e) {
  e.target.src = defaultImageURL;
}

</script>

<template>

  <img v-if="serviceURL" :src="serviceURL" class="img-thumbnail"
       :style="style" loading="lazy" @error="errorImage"/>
  <img v-else :src="defaultImageURL" class="img-thumbnail"
       :style="style" loading="lazy" />

</template>
