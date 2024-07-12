import { defineStore } from 'pinia'
import { inject, ref, computed } from 'vue'

export const useFavouriteOriginIDsStore = defineStore('favouriteOriginIDs', () => {

  const favouriteIDs = ref([])

  const hasFavourites = computed(() => favouriteIDs.value.length > 0)
  const ids = computed(() => favouriteIDs.value)

  function addID(service) {
    const id = typeof service === 'string' ? service : service.id
    const favSet = new Set(favouriteIDs.value)
    if (!favSet.has(id)) {
      favSet.add(id)
      const favsExport = Array.from(favSet)
      favouriteIDs.value = favsExport.slice(0, 6)
    }
  }

  function delID(service) {
    const id = typeof service === 'string' ? service : service.id
    const favSet = new Set(favouriteIDs.value)
    if (favSet.has(id)) {
      favSet.delete(id)
      favouriteIDs.value = Array.from(favSet)
    }
  }

  function $reset() {
    favouriteIDs.value = []
  }

  return { favouriteIDs, addID, delID, $reset, hasFavourites, ids }

}, { persist: true })

