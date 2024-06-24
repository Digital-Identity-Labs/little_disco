<script setup>
import IdpAdd from '@/components/InstitutionSelector/IdpAdd.vue'
import IdpEdit from '@/components/InstitutionSelector/IdpEdit.vue'
import IdpList from '@/components/InstitutionSelector/IdpList.vue'

import * as sp from '../utils/sp'
import { shallowRef } from 'vue'
import { inject } from 'vue'

const props = defineProps(['queryParams'])

const appConfig = inject('appConfig')

const activeISC = shallowRef(IdpList);

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
