<script setup>


import { inject, ref } from 'vue'
import { reactive, computed } from 'vue'
import OriginItem from '@/components/OriginSelector/OriginItem.vue'
import MiniSearch from 'minisearch'

const appConfig = inject('appConfig');

const props = defineProps(['request', 'destination', 'servicesData'])

const miniSearch = new MiniSearch({
  fields: ['name', 'desc', 'kw', 'desc', 'dom'], // fields to index for full-text search
  storeFields: ['id', 'info', 'name', 'logo'] // fields to return with search results
})

// Index all documents
miniSearch.addAll(props.servicesData.values())

const searchInput = ref("");

const searchResults = computed(() => {
  if (searchInput.value.length > 2) {
    const text = searchInput.value.includes('@') ? searchInput.value.split('@')[1] : searchInput.value;
    return miniSearch.search(text, { prefix: true, fuzzy: 0.2 });
  } else {
    return [];
  }
})

</script>

<template>

  <div class="card-header">
    <h3 class="card-title">Search &amp; Add</h3>
  </div>
  <div class="list-group list-group-flush list-group-hoverable">

    <div class="card-body">

      <div class="mb-3">
        <div class="form-label">Search</div>
        <input type="text" autocomplete="organization url email" class="form-control"
               v-model="searchInput" placeholder="Your institution">
      </div>

      <div class="mb-3">
        <!--<div class="form-label">Single switch</div>-->
        <label class="form-check form-switch">
          <input class="form-check-input" type="checkbox">
          <span class="form-check-label">Remember as a favourite</span>
        </label>
      </div>

      <div class="list-group list-group-flush list-group-hoverable">

        <OriginItem
          v-for="(service) in searchResults"
          :service="service"
          :request="props.request"
          :destination="props.destination"
          :key="service.id"
          :expertMode="expertMode"
        />

      </div>


    </div>

  </div>

</template>
