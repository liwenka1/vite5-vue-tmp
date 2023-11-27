<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: themeData.colorPrimary,
        borderRadius: `${themeData.borderRadius}px`,
        colorBgBase: themeData.colorBgBase
      }
    }"
  >
    <Layout />
  </a-config-provider>
</template>

<script setup lang="ts">
import Layout from './components/Layout/index.vue'
import { useThemeStore } from './store/useTheme'
import { storeToRefs } from 'pinia'

const store = useThemeStore()
const { themeData } = storeToRefs(store)
</script>
