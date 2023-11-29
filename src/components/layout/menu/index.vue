<template>
  <div :class="{ menu: mode === 'horizontal' }">
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" :mode="mode" :theme="stylePrimary.value">
      <a-menu-item key="1" @click="handleMenu('/')">
        <pie-chart-outlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2" @click="handleMenu('/about')">
        <desktop-outlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            <span>User</span>
          </span>
        </template>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <team-outlined />
            <span>Team</span>
          </span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <file-outlined />
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'

interface Props {
  mode: 'horizontal' | 'inline'
}

const { mode } = defineProps<Props>()

const selectedKeys = ref<string[]>(['1'])
const router = useRouter()
const handleMenu = (key: string) => {
  router.push(key)
}

const store = useLayoutSetting()
const { stylePrimary } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
}
.logo {
  height: 32px;
  margin: 16px;
  width: 168px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
