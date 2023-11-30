<template>
  <template v-for="menu in menus" :key="menu.name">
    <template v-if="!menu.meta?.hideInMenu">
      <template v-if="menu.children">
        <a-sub-menu :key="menu.name" :icon="() => h(menu.meta?.icon as Component)">
          <template #title>
            <span>{{ menu.meta?.title }}</span>
          </template>
          <MenuItem :menus="menu.children" />
        </a-sub-menu>
      </template>
      <template v-else>
        <a-menu-item
          :key="menu.name"
          :icon="() => h(menu.meta?.icon as Component)"
          @click="handleMenuItem(menu.meta?.title as string, menu.name as string)"
        >
          <span>
            {{ menu.meta?.title }}
          </span>
        </a-menu-item>
      </template>
    </template>
  </template>
</template>
<script lang="ts" setup>
import { h, Component } from 'vue'
import { RouteRecordRaw, useRouter } from 'vue-router'
import { useTabsStore } from '@/store/useTabs'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'MenuItem'
})

interface Props {
  menus: Array<RouteRecordRaw>
}
const { menus } = defineProps<Props>()

const router = useRouter()

const store = useTabsStore()
const { keys } = storeToRefs(store)
const { setActiveKey, addKey, addPane } = store
const handleMenuItem = (title: string, name: string) => {
  if (!keys.value.has(name)) {
    addKey(name)
    addPane({ title, name })
  }
  setActiveKey({ title, name })
  router.push({ name })
}
</script>

<style lang="scss" scoped></style>
