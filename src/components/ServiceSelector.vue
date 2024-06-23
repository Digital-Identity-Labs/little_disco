<script setup>


import * as sp from '../utils/sp'

import { inject } from 'vue'

const appConfig = inject('app_config')

</script>

<template>

  <div class="page-wrapper">
    <!-- Page header -->
    <div class="page-header d-print-none">
      <div class="container-xl">
        <div class="row g-2 align-items-center">
          <div class="col">
            <h2 class="page-title">
              Services
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-cards">

          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <div>
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <span class="avatar" style="background-image: url(./static/avatars/000m.jpg)"></span>
                    </div>
                    <div class="col">
                      <div class="card-title">Sho</div>
                      <div class="card-subtitle">By Digital Identity</div>
                    </div>
                  </div>
                </div>
                <div class="card-actions">
                  <a href="#" class="btn btn-primary ms-auto">Access >></a>
                </div>
              </div>
              <div class="card-body">
                <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                  neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <a href="#" class="btn btn-link">Privacy</a>
                  <a href="#" class="btn btn-link">More Info</a>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>


</template>
