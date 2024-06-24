<script setup>
import IdpAdd from '@/components/OriginSelector/IdpAdd.vue'
import IdpEdit from '@/components/OriginSelector/IdpEdit.vue'
import IdpList from '@/components/OriginSelector/IdpList.vue'

import * as origins from '../utils/origins.js'


import * as sp from '../utils/sp'
import { shallowRef } from 'vue'
import { inject } from 'vue'
import * as destinations from '@/utils/destinations.js'

const props = defineProps(['queryParams'])

const appConfig = inject('appConfig')

const activeISC = shallowRef(IdpList);

const servicesData = origins.listServices(appConfig);


</script>

<template>

  <div class="container-xl">
    <div class="row row-cards">
      <label><input type="radio" v-model="activeISC" :value="IdpList" /> A</label>
      <label><input type="radio" v-model="activeISC" :value="IdpEdit" /> B</label>
      <KeepAlive>
        <component :is="activeISC"></component>
      </KeepAlive>
    </div>
  </div>

</template>
