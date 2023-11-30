<template>
  <template v-for="menu in menus" :key="menu.path">
    <template v-if="!menu.meta?.hideInMenu">
      <a-sub-menu v-if="menu.children" :key="menu.path" :icon="() => h(menu.meta?.icon as Component)">
        <template #title>
          <span>{{ menu.meta?.title }}</span>
        </template>
        <MenuItem :menus="menu.children" />
      </a-sub-menu>
      <a-menu-item v-else :key="menu.name" :icon="() => h(menu.meta?.icon as Component)">
        <router-link :to="menu.path" @click="handleMenuItem(menu.meta?.title as string, menu.path)">{{
          menu.meta?.title
        }}</router-link>
      </a-menu-item>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { h, Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { useTabsStore } from '@/store/useTabs'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'MenuItem'
})

interface Props {
  menus: Array<RouteRecordRaw>
}
const { menus } = defineProps<Props>()

const store = useTabsStore()
const { keys } = storeToRefs(store)
const { setActiveKey, addKey, addPane } = store
const handleMenuItem = (title: string, path: string) => {
  console.log('点了一下侧边栏')
  if (!keys.value.has(path)) {
    addKey(path)
  }
  addPane({ title, path })
  setActiveKey({ title, path })
}
</script>

<style lang="scss" scoped></style>
