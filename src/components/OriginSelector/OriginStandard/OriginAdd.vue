<script setup>


import { inject, ref } from 'vue'
import { reactive, computed } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import MiniSearch from 'minisearch'
import { useFavouriteOriginIDsStore } from '@/stores/favourite_origin_ids.js'
import { useSearchOptionsStore } from '@/stores/search_options.js'

const appConfig = inject('appConfig')

const props = defineProps(['request', 'destination'])

const miniSearch = new MiniSearch({
  fields: ['name', 'desc', 'kw', 'desc', 'dom'], // fields to index for full-text search
  storeFields: ['id', 'info', 'name', 'logo', 'hide'] // fields to return with search results
})

const servicesData = inject('servicesData')

// Index all documents
miniSearch.addAll(servicesData.values())

const searchInput = ref('')

const searchOptionsStore = useSearchOptionsStore()

const searchResults = computed(() => {
  if (searchInput.value.length > 2) {
    const text = searchInput.value.includes('@') ? searchInput.value.split('@')[1] : searchInput.value
    const results = miniSearch.search(text, { prefix: true, boost: {name: 2}, fuzzy: appConfig.fuzzy_search });
    const count = results.length
    return results.slice(0, appConfig.max_results);
  } else {
    return []
  }
})

</script>

<template>

  <div class="card-header">
    <h3 class="card-title">Find</h3>
  </div>
  <div class="list-group list-group-flush list-group-hoverable">

    <div class="card-body">

      <div class="mb-3">
        <!--<div class="form-label">Search</div>-->
        <div class="input-icon mb-3">
          <input type="text" autocomplete="organization url email" class="form-control"
                 v-model="searchInput" placeholder="Your institution's name or your email address">
          <span class="input-icon-addon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" class="icon"><path stroke="none" d="M0 0h24v24H0z"
                                                                                  fill="none"></path><path
                                    d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
                                </span>
        </div>

      </div>

      <div class="mb-3">
        <!--<div class="form-label">Single switch</div>-->
        <div v-if="appConfig.show_settings" class="mb-3">
          <label class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="searchOptionsStore.remember" :value="1">
            <span class="form-check-label">Remember as a favourite</span>
          </label>
        </div>
      </div>

      <div class="list-group list-group-flush list-group-hoverable">

        <OriginItem
          v-for="(service) in searchResults"
          :service="service"
          :request="props.request"
          :destination="props.destination"
          :key="service.id"
        />

      </div>


    </div>

  </div>

</template>
