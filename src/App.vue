<template>
  <a-config-provider
    :theme="{
      algorithm: stylePrimary.algorithm,
      token: {
        colorPrimary: colorPrimary
      }
    }"
  >
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'

const store = useLayoutSetting()
const { colorPrimary, stylePrimary } = storeToRefs(store)
</script>
