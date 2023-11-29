<template>
  <a-tabs
    v-model:activeKey="activeKey"
    hide-add
    type="editable-card"
    class="tabs"
    :class="{ isNotRealDark: stylePrimary.key !== 'realDark' }"
  >
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable" />
  </a-tabs>
  <div class="content" :class="{ isNotRealDark: stylePrimary.key !== 'realDark' }">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'
import { useTabsStore } from '@/store/useTabs'

const LayoutSettingStore = useLayoutSetting()
const { stylePrimary } = storeToRefs(LayoutSettingStore)

const tabsStore = useTabsStore()
const { activeKey, panes } = storeToRefs(tabsStore)
</script>

<style lang="scss" scoped>
.tabs {
  margin: 0;
}
.content {
  margin: 16px;
  padding: 24px;
  min-height: 360px;
}
.isNotRealDark {
  background: #fff;
}
</style>
