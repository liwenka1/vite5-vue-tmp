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
        <router-link :to="menu.path">{{ menu.meta?.title }}</router-link>
      </a-menu-item>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { h, Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'

defineOptions({
  name: 'MenuItem'
})

interface Props {
  menus: Array<RouteRecordRaw>
}
const { menus } = defineProps<Props>()
</script>

<style lang="scss" scoped></style>
