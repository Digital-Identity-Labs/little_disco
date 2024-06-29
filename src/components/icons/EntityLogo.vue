<script setup>

console.log('Logo starting');

const props = defineProps(['service', 'size'])
import { inject } from 'vue'
import * as logo from '../../utils/logo_utils.js';


const appConfig = inject('appConfig')

const service = props.service
const style = logo.style(props.size);

console.log(style);

</script>

<template>

  <img v-if="service.logo_url" :src="service.logo_url" class="img-thumbnail"
       :style="style" />

</template>
