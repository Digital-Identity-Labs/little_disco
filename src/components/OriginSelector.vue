<script setup>
import OriginAdd from '@/components/OriginSelector/OriginStandard/OriginAdd.vue'
import OriginEdit from '@/components/OriginSelector/OriginStandard/OriginEdit.vue'
import OriginFavourites from '@/components/OriginSelector/OriginStandard/OriginFavourites.vue'
import OriginSuggestions from '@/components/OriginSelector/OriginStandard/OriginSuggestions.vue'

import OriginSimpleList from '@/components/OriginSelector/OriginSimple/OriginList.vue'

import IconDelete from '@/components/icons/IconDelete.vue'
import IconDeleteDisabled from '@/components/icons/IconDeleteDisabled.vue'
import IconAdd from '@/components/icons/IconAdd.vue'
import IconFavourites from '@/components/icons/IconFavourites.vue'
import IconSuggest from '@/components/icons/IconSuggest.vue'

import { useFavouriteOriginIDsStore } from '@/stores/favourite_origin_ids.js'


import * as destinations from '../utils/destinations.js'

import { computed, ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { inject, provide } from 'vue'
import * as originsStrategy from '@/utils/origins.js'

const props = defineProps(['request'])

const appConfig = inject('appConfig')
const discoDestination = inject('discoDestination')

const destination = destinations.lookupService(props.request.entityID, appConfig)

discoDestination.value = destination

const origins = originsStrategy.is(appConfig.df_provider_type)
const servicesData = await origins.listServices(appConfig)

const favStore = useFavouriteOriginIDsStore()

provide('servicesData', servicesData);



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
                  <OriginFavourites v-if="favStore.hasFavourites" :request="props.request" :destination="destination" />
                  <OriginSuggestions v-else :request="props.request" :destination="destination"  />
                </KeepAlive>
              </div>
              <!-- Content of card #2 -->
              <div id="tab-bottom-2" class="card tab-pane" role="tabpanel">
                <KeepAlive>
                  <OriginAdd :request="props.request" :destination="destination"  />
                </KeepAlive>
              </div>
              <!-- Content of card #3 -->
              <div id="tab-bottom-3" class="card tab-pane" role="tabpanel">
                <KeepAlive>
                  <OriginEdit :request="props.request" :destination="destination"  />
                </KeepAlive>
              </div>

            </div>
            <!-- Cards navigation -->
            <ul class="nav nav-tabs nav-tabs-bottom" role="tablist">
              <li class="nav-item" role="presentation"><a id="tl1" href="#tab-bottom-1" class="nav-link active"
                                                          data-bs-toggle="tab" aria-selected="true" role="tab">
                <span v-if="favStore.hasFavourites === true"><IconFavourites/>&nbsp;Favourites</span><span v-else><IconSuggest/>&nbsp;Suggestions</span></a>
              </li>
              <li class="nav-item" role="presentation"><a id="tl2" href="#tab-bottom-2" class="nav-link" data-bs-toggle="tab"
                                                          aria-selected="false" tabindex="-1" role="tab">
                <IconAdd/>&nbsp;Find
              </a>
              </li>
              <li class="nav-item" role="presentation">
                <a id="tl3" v-if="favStore.hasFavourites" href="#tab-bottom-3" class="nav-link" data-bs-toggle="tab"
                   aria-selected="false" tabindex="-1" role="tab"> <IconDelete/>&nbsp;Remove</a>
              <a id="tl3" v-else href="#tab-bottom-3" class="nav-link disabled" data-bs-toggle="tab"
                 aria-selected="false" tabindex="-1" role="tab"><IconDeleteDisabled/>&nbsp;Remove</a>
              </li>
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