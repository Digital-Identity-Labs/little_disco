import { defineStore } from 'pinia'
import { inject, ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

export const useFavouriteOriginIDsStore = defineStore('favouriteOriginIDs', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const favouriteIDs = ref([]) //useStorage('userFavorites', [])

  const doubleCount = computed(() => count.value * 2)

  const hasFavourites = computed(() => favouriteIDs.value.length > 0)
  const ids = computed(() => favouriteIDs.value)

  function increment() {
    count.value++
  }

  function addID(service) {
    console.log('XXXXXX')
    const id = typeof service === 'string' ? service : service.id
    console.log(id)
    const favSet = new Set(favouriteIDs.value)
    console.log(favSet)
    if (!favSet.has(id)) {
      favSet.add(id)
      const favsExport = Array.from(favSet)
      favouriteIDs.value = favsExport.slice(0, 6)
      console.log(favouriteIDs)
      console.log(favouriteIDs.value)
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

  return { count, name, doubleCount, increment, favouriteIDs, addID, delID, $reset, hasFavourites, ids }

}, { persist: true })

