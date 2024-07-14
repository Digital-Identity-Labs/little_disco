import { defineStore } from 'pinia'
import { inject, ref, computed } from 'vue'

export const useFavouriteOriginIDsStore = defineStore('favouriteOriginIDs', () => {

  const appConfig = inject('appConfig')

  const favouriteIDs = ref([])
  const hasFavourites = computed(() => favouriteIDs.value.length > 0)
  const ids = computed(() => favouriteIDs.value)

  function addID(service) {
    const id = typeof service === 'string' ? service : service.id
    if (favouriteIDs.value === [] || favouriteIDs.value.indexOf(id) !== 0 ) {
      const newFavs = [id].concat(favouriteIDs.value);
      const favSet = new Set(newFavs);
      const favsExport = Array.from(favSet);
      favouriteIDs.value = favsExport.slice(0, appConfig.max_favourites);
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

