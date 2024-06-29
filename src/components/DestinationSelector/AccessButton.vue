<script setup>
import EntityLogo from '@/components/icons/EntityLogo.vue'

const props = defineProps(['service'])
import { inject } from 'vue'
import * as redirector from '@/utils/redirector.js'

//const appConfig = inject('appConfig')
const expertMode = inject('expertMode')

const service = props.service

const defaultInitiator = redirector.buildInitiatorURL(service);
const expertInitiators = redirector.buildDefaultInitiatorURLs(service);

</script>

<template>

  <template v-if="service.login_url">

    <a v-if="expertMode === true" :href="service.login_url">
      <div class="btn-group">
        <button type="button" class="btn btn-danger"><span class="d-md-none d-lg-block">Access&nbsp;</span> >></button>
        <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"
                aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" :href="defaultInitiator">Default</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li v-for="(url, name) in expertInitiators" :key="name"><a class="dropdown-item" :href="url">{{ name }}</a>
          </li>
        </ul>
      </div>
    </a>

    <a v-else :href="defaultInitiator" class="btn btn-primary ms-auto"><span class="d-md-none d-lg-block">Access&nbsp;</span> >></a>

  </template>

  <a v-else class="btn btn-primary ms-auto disabled"><span class="d-md-none d-lg-block">Access&nbsp;>></span> >></a>


</template>
