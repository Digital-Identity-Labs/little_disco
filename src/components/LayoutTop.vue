<script setup>
import { inject } from 'vue'

const appConfig = inject('appConfig');

</script>

<template>
  <header class="navbar navbar-expand-md d-print-none" >
    <div class="container-xl">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <h1><img src="@/assets/ld_logo.png" class="top_logo"/> {{appConfig.service_title}}</h1>
      </h1>

    </div>

  </header>

</template>

<style scoped>
.top_logo {
  width: 32px;
  vertical-align: middle;
}
</style>
