<script setup>


import * as sp from '../utils/sp'
import UserAttributes from '@/components/UserAttributes.vue'
import UserSession from '@/components/UserSession.vue'
import { inject } from 'vue'

const appConfig = inject('app_config')


const userData = await sp.sessionData(appConfig.session_data_path)

console.log(userData)

</script>

<template>

  <div class="page-header d-print-none">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <!-- Page pre-title -->
          <div class="page-pretitle">
            Overview
          </div>
          <h2 class="page-title">
            Attribute Viewer
          </h2>
        </div>
        <!-- Page title actions -->
        <div class="col-auto ms-auto d-print-none">
          <div class="btn-list">
                  <span class="d-none d-sm-inline">

      <a v-if="appConfig.logout_path" :href="appConfig.logout_path" class="btn btn-danger w-100">
                          <!-- Download SVG icon from http://tabler-icons.io/i/brand-youtube -->
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                              class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none"
                                                                                                     d="M0 0h24v24H0z"
                                                                                                     fill="none" /><path
                           d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path
                           d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>

                          Log Out
                        </a>
                  </span>

          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <UserSession :userData="userData" />
  <br />
  <UserAttributes :userData="userData" />


</template>
