<script setup>
import { inject } from 'vue'
import EntityLogo from '@/components/icons/EntityLogo.vue'
import DestinationCard from '@/components/DestinationSelector/DestinationCard.vue'

const appConfig = inject('appConfig');
const discoDestination = inject('discoDestination');

</script>

<template>

  <header class="navbar navbar-expand-md d-print-none">
    <div class="container-xl">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <img src="@/assets/ld_logo.png" class="top_logo"/>
          {{appConfig.service_title}}
      </h1>
      <div class="navbar-nav flex-row order-md-last">

        <div v-if="discoDestination" class="nav-item">

          <a  class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="offcanvas" href="#offcanvasTop" aria-label="Show destination">
            <EntityLogo :service="discoDestination" :config="appConfig" size="medium"/>
            <div class="d-none d-xl-block ps-2">
              <div>{{discoDestination.name}}</div>
              <div class="small text-secondary">Published by {{discoDestination.org_name}} </div>
            </div>
          </a>

          </div>
        </div>
      </div>

  </header>

  <div  v-if="discoDestination" class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="offcanvasTopLabel">You are accessing</h2>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <DestinationCard
        :service="discoDestination"
        :key="discoDestination.id"
        :access="false"
        :big="true"
      />
    </div>
  </div>

</template>

<style scoped>
.top_logo {
  width: 32px;
  vertical-align: middle;
}
</style>
