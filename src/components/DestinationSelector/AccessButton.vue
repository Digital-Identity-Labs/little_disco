<script setup>

const props = defineProps(['service'])
import * as redirector from '@/utils/redirector.js'
import { useExpertModeStore } from '@/stores/expert_mode.js'

const service = props.service

const defaultInitiator = redirector.buildInitiatorURL(service);
const expertInitiators = redirector.buildDefaultInitiatorURLs(service);

const emStore = useExpertModeStore()

</script>

<template>

  <template v-if="service.login_urls.length !== 0">

    <a v-if="emStore.isEnabled" :href="service.login_url">
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
