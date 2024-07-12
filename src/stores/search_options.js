import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSearchOptionsStore = defineStore('searchOptions', () => {

  const remember = ref(1)

  const rememberIsEnabled = computed(() => remember.value === 1 || remember.value === true)

  function enableRemember() {
    remember.value = 1;
    }

  function disableRemember() {
    remember.value = 0;
  }

  function $reset() {
    remember.value = 0;
  }

  return { remember, enableRemember, disableRemember, $reset, rememberIsEnabled }

}, { persist: true })

