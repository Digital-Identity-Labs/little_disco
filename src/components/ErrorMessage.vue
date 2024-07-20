<script setup>
import { useExpertModeStore } from '@/stores/expert_mode.js'

const props = defineProps(['errorMessage'])
const emStore = useExpertModeStore();

const message = props.errorMessage?.message || props.errorMessage

</script>

<template>

  <div class="container-xl">
    <div class="row row-cards">

      <div class="col-md-12 col-lg-6">
        <div class="card card-rotate-left">
          <div class="card-stamp">
            <div class="card-stamp-icon bg-red">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bug"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v-1a3 3 0 0 1 6 0v1" /><path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" /><path d="M3 13l4 0" /><path d="M17 13l4 0" /><path d="M12 20l0 -6" /><path d="M4 19l3.35 -2" /><path d="M20 19l-3.35 -2" /><path d="M4 7l3.75 2.4" /><path d="M20 7l-3.75 2.4" /></svg>
            </div>
          </div>
          <div class="card-status-top bg-danger"></div>
          <div class="card-body">
            <h3 class="card-title">An Error Has Occurred</h3>
            <p class="text-secondary">Something has gone wrong and we can't continue.</p>
            <p class="text-secondary">This is probably not your fault.</p>
            <p v-if="emStore.isEnabled"><code>{{message}}</code></p>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>
