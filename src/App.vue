<script setup>
import { RouterLink, RouterView } from 'vue-router'

import LayoutTop from './components/LayoutTop.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { computed, onErrorCaptured, ref } from 'vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { useRouter, useRoute } from 'vue-router'
import PassiveView from '@/views/PassiveView.vue'

const route = useRoute()

const errorMsg = ref('')

onErrorCaptured((error) => {
  console.error(error)
  errorMsg.value = error
  return false
})

const isError = computed(() => errorMsg.value !== '');
const isPassive = route.query.isPassive === 'true';

</script>

<template>

  <template v-if="isPassive">
    <suspense>
      <PassiveView />
    </suspense>
  </template>

  <template v-else>
    <LayoutTop />
    <div class="page-wrapper">
      <div class="page-body">
        <suspense>
          <ErrorMessage v-if="isError" :error-message="errorMsg"></ErrorMessage>
          <RouterView v-else :key="$route.fullPath" />
        </suspense>
      </div>
    </div>

    <LayoutFooter />
  </template>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
