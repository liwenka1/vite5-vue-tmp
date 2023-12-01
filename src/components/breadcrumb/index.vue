<template>
  <a-breadcrumb :routes="breadcrumbRouters">
    <template #itemRender="{ route, routes }">
      <span v-if="routes.indexOf(route) === routes.length - 1">{{ route.meta.title }}</span>
      <span v-else @click="handleClick(route.name)">{{ route.meta.title }}</span>
    </template>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
import { routes, breadcrumbRouters } from '@/router/routers'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// const filterRoutes = routes.filter((route) => route.meta?.hideInMenu !== true)
const route = useRoute()
const router = useRouter()
const handleClick = (name: string) => {
  router.push({ name })
}

watch(
  () => route.name,
  () => {
    console.log(route.meta, breadcrumbRouters)
  }
)
</script>

<style lang="scss" scoped></style>
