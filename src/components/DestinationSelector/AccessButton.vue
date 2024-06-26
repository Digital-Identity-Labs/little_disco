<script setup>
import EntityLogo from '@/components/icons/EntityLogo.vue'

const props = defineProps(['service'])
import { inject } from 'vue'

const appConfig = inject('appConfig')
const expertMode = inject('expertMode')

const service = props.service

</script>

<template>



  <template v-if="service.login_url">

    <div v-if="expertMode === true" :href="service.login_url" class="btn-group">
      <button type="button" class="btn btn-danger">Access >></button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
              aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>

    <a v-else :href="service.login_url" class="btn btn-primary ms-auto">Access >></a>

  </template>

  <a v-else class="btn btn-primary ms-auto disabled">Access >></a>


</template>
