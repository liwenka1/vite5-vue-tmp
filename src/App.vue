<template>
  <a-config-provider
    :theme="{
      algorithm: stylePrimary.algorithm,
      token: {
        colorPrimary: colorPrimary
      }
    }"
  >
    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'

const store = useLayoutSetting()
const { colorPrimary, stylePrimary } = storeToRefs(store)
</script>
