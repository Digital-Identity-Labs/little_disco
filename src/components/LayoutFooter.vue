<script setup>
import { inject, shallowRef, ref } from 'vue'

const appConfig = inject('appConfig');
const expertMode = inject('expertMode');

console.log("BOOP");
console.log(expertMode);


</script>

<template>
  <footer class="footer footer-transparent d-print-none">
    <div class="container-xl">
      <div class="row text-right align-items-right flex-row-reverse">
        <div class="col-lg-auto ms-lg-auto">
          <div v-if="appConfig.show_settings" class="mb-3">
            <div class="form-label">Settings</div>
            <label class="form-check form-switch">
              <input class="form-check-input" type="checkbox" v-model="expertMode" :value="true">
              <span class="form-check-label">Expert Mode</span>
            </label>
          </div>
        </div>
        <div class="col-12 col-lg-auto mt-3 mt-lg-0">
          Bottom: {{ expertMode }}
        </div>
      </div>
    </div>
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
