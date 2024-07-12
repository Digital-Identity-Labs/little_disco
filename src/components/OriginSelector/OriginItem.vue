<script setup>

import EntityLogo from '@/components/icons/EntityLogo.vue'
import * as redirector from '@/utils/redirector.js'
import * as favouriteStore from '@/utils/favourites.js'

import IconDelete from '@/components/icons/IconDelete.vue'
import IconNext from '@/components/icons/IconNext.vue'

import { inject, provide, reactive } from 'vue'
import { useFavouriteOriginIDsStore } from '@/stores/favourite_origin_ids.js'
import { useExpertModeStore } from '@/stores/expert_mode.js'

const props = defineProps(['service', 'request', 'destination', 'mode'])
const service = props.service
const appConfig = inject('appConfig')
const returnURL = props.mode === 'edit' ? '#' : redirector.buildReturnURL(props.service, props.request, props.destination, appConfig)

const favStore = useFavouriteOriginIDsStore()
const emStore = useExpertModeStore()

function favourite(service, mode = 'open') {
  if (mode === 'edit') {
    favStore.delID(service)
  } else {
    favStore.addID(service)
  }
}

</script>

<template>

  <transition>
    <div class="list-group-item" v-if="emStore.isEnabled || !!(service.hide) === false">
      <a class="no-underline" @click="favourite(service, props.mode)" :href="returnURL">
        <div class="row align-items-center">
          <div class="col-auto">
            <EntityLogo :service="props.service" :config="appConfig" />
          </div>
          <div class="col text-truncate">
            <strong><span href="#" class="text-reset d-block">{{ service.name || service.id }}</span></strong>
            <div class="d-block text-secondary text-truncate mt-n1">{{ service.desc || '&nbsp;' }}
            </div>
          </div>
          <div class="col-auto">
          <span href="#" class="list-group-item-actions">
            <IconDelete v-if="props.mode === 'edit'" />
            <IconNext v-else />
          </span>
          </div>
        </div>
      </a>
    </div>
  </transition>


</template>

<style scoped>
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