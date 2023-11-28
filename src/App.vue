<template>
  <a-config-provider
    :theme="{
      algorithm: stylePrimary.algorithm,
      token: {
        colorPrimary: colorPrimary
      }
    }"
  >
    <Layout />
  </a-config-provider>
</template>

<script setup lang="ts">
import Layout from '@/components/layout/index.vue'
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'

const store = useLayoutSetting()
const { colorPrimary, stylePrimary } = storeToRefs(store)
</script>
