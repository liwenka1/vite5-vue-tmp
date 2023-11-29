<template>
  <div :class="{ menu: mode === 'horizontal' }">
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" :mode="mode" :theme="stylePrimary.value">
      <MenuItem :menus="routes" />
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'
import routes from '@/router/routers'
import MenuItem from './menuItem.vue'

interface Props {
  mode: 'horizontal' | 'inline'
}

const { mode } = defineProps<Props>()

const selectedKeys = ref<string[]>(['1'])

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
