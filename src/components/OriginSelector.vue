<script setup>
import IdpAdd from '@/components/OriginSelector/IdpAdd.vue'
import IdpEdit from '@/components/OriginSelector/IdpEdit.vue'
import IdpList from '@/components/OriginSelector/IdpList.vue'
import IdpListSimple from '@/components/OriginSelector/IdpSimple.vue'

import * as destinations from '../utils/destinations.js'

import { shallowRef } from 'vue'
import { inject } from 'vue'

const props = defineProps(['request'])

console.log('4')

const appConfig = inject('appConfig')
const discoDestination = inject('discoDestination');

console.log('5')


const activeISC = shallowRef(IdpList);
console.log('6')


const destination = destinations.lookupService(props.request.entityID, appConfig);

console.log('7')

discoDestination.value = destination;

console.log('8')

</script>

<template>

  <div v-if="appConfig.origin_mode === 'simple'" class="container-xl">
    <div class="row row-cards">
        <IdpListSimple :request="props.request" :destination="destination"/>
    </div>
  </div>

  <div v-else class="container-xl">
    <div class="row row-cards">
      <label><input type="radio" v-model="activeISC" :value="IdpList" /> A</label>
      <label><input type="radio" v-model="activeISC" :value="IdpEdit" /> B</label>
      <KeepAlive>
        <component :is="activeISC" :request="props.request" :destination="destination"></component>
      </KeepAlive>
    </div>
  </div>

</template>
