<template>
  <div class="header">
    <div>
      <Breadcrumb v-if="layoutPrimary === 'sidemenu'" />
      <Menu v-if="layoutPrimary === 'topmenu'" mode="horizontal" />
    </div>
    <div class="right">
      <Avatar />
      <Theme />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Theme from '@/components/theme/index.vue'
import Avatar from '@/components/avatar/index.vue'
import Breadcrumb from '@/components/breadcrumb/index.vue'
import Menu from '@/components/layout/menu/index.vue'
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'

const store = useLayoutSetting()
const { layoutPrimary } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
  .right {
    display: flex;
    gap: 20px;
  }
}
</style>
