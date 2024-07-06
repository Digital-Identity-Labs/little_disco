<script setup>
import OriginAdd from '@/components/OriginSelector/OriginStandard/OriginAdd.vue'
import OriginEdit from '@/components/OriginSelector/OriginStandard/OriginEdit.vue'
import OriginFavourites from '@/components/OriginSelector/OriginStandard/OriginFavourites.vue'
import OriginSuggestions from '@/components/OriginSelector/OriginStandard/OriginSuggestions.vue'

import OriginSimpleList from '@/components/OriginSelector/OriginSimple/OriginList.vue'

import * as destinations from '../utils/destinations.js'

import { Netmask } from 'netmask'

var block = new Netmask('10.0.0.0/12')

import { ref } from 'vue'
import { inject } from 'vue'
import * as originsStrategy from '@/utils/origins.js'

const props = defineProps(['request'])

const appConfig = inject('appConfig')
const discoDestination = inject('discoDestination')
const expertMode = inject('expertMode')


const destination = destinations.lookupService(props.request.entityID, appConfig)

discoDestination.value = destination

const origins = originsStrategy.is(appConfig.df_provider_type)
const servicesData = await origins.listServices(appConfig)

const favouriteServices = []

</script>

<template>

  <div v-if="appConfig.origin_mode === 'simple'" class="container-xl">
    <div class="row row-cards">
      <OriginSimpleList :request="props.request" :destination="destination" />
    </div>
  </div>

  <div v-else class="container-xl">
    <div class="col-md-6">
      <div class="row row-cards">
        <div class="col-12">
          <div class="card-tabs consistent-height">
            <div class="tab-content">
              <!-- Content of card #1 -->
              <div id="tab-bottom-1" class="card tab-pane active show" role="tabpanel">
                <KeepAlive>
                  <OriginSuggestions v-if="favouriteServices.length === 0" :request="props.request"
                                     :destination="destination" :servicesData="servicesData" />
                  <OriginFavourites v-else :request="props.request" :destination="destination"
                                    :servicesData="servicesData" />
                </KeepAlive>
              </div>
              <!-- Content of card #2 -->
              <div id="tab-bottom-2" class="card tab-pane" role="tabpanel">
                <KeepAlive>
                  <OriginAdd :request="props.request" :destination="destination" :servicesData="servicesData" />
                </KeepAlive>
              </div>
              <!-- Content of card #3 -->
              <div id="tab-bottom-3" class="card tab-pane" role="tabpanel">
                <KeepAlive>
                  <OriginEdit :request="props.request" :destination="destination" :servicesData="servicesData" />
                </KeepAlive>
              </div>

            </div>
            <!-- Cards navigation -->
            <ul class="nav nav-tabs nav-tabs-bottom" role="tablist">
              <li class="nav-item" role="presentation"><a href="#tab-bottom-1" class="nav-link active"
                                                          data-bs-toggle="tab" aria-selected="true" role="tab">Favourites</a>
              </li>
              <li class="nav-item" role="presentation"><a href="#tab-bottom-2" class="nav-link" data-bs-toggle="tab"
                                                          aria-selected="false" tabindex="-1" role="tab">Find & Add</a>
              </li>
              <li class="nav-item" role="presentation"><a href="#tab-bottom-3" class="nav-link" data-bs-toggle="tab"
                                                          aria-selected="false" tabindex="-1" role="tab">Edit</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

.consistent-height .tab-content {
  display: flex;
}

.consistent-height .tab-content > .tab-pane {
  display: block; /* undo "display: none;" */
  visibility: hidden;
  margin-right: -100%;
  width: 100%;
}

.consistent-height .tab-content > .active {
  visibility: visible;
}

.full_selector {
  height: 600px;
}

.no-underline:hover {
  text-decoration: none;

}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>