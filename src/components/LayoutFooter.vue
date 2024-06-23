<script setup>
import { inject } from 'vue'

const appConfig = inject('appConfig');
</script>

<template>
  <footer class="footer footer-transparent d-print-none">
    <div class="container-xl">
      <div class="row text-center align-items-center flex-row-reverse">
        <div class="col-lg-auto ms-lg-auto">
          <ul class="list-inline list-inline-dots mb-0"  v-if="appConfig.footer_links.length > 0">
            <li v-for="link in appConfig.footer_links" :key="link.url" class="list-inline-item"><a :href="link.url" target="_blank" class="link-secondary" rel="noopener">{{link.text}}</a></li>
          </ul>
          <p v-else>-</p>
        </div>
        <div class="col-12 col-lg-auto mt-3 mt-lg-0">
          <ul class="list-inline list-inline-dots mb-0">
            <li class="list-inline-item">
              <img src="@/assets/ld_logo.png" class="bot_logo"/>
              <a href="." class="link-secondary"> {{appConfig.app_name}}</a>
            </li>
            <li class="list-inline-item">
              {{appConfig.notice}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bot_logo {
  width: 16px;
  margin-right: 8px;
}
</style>
