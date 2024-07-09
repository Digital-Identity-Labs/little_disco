<script setup>

const props = defineProps(['service', 'size'])
import { inject } from 'vue'
import * as logo from '../../utils/logo_utils.js';


const appConfig = inject('appConfig')

const service = props.service
const style = logo.style(props.size);

</script>

<template>

  <img v-if="service.logo" :src="service.logo" class="img-thumbnail"
       :style="style" />

</template>
