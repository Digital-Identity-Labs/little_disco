import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useExpertModeStore = defineStore('expertMode', () => {

  const expertMode = ref(0)

  const isEnabled = computed(() => expertMode.value === 1 || expertMode.value === true)

  function enable() {
    expertMode.value = 1;
    }

  function disable() {
    expertMode.value = 0;
  }

  function $reset() {
    expertMode.value = 0;
  }

  return { expertMode, enable, disable, $reset, isEnabled }

}, { persist: true })

