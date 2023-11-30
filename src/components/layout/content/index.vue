<template>
  <a-tabs
    v-model:activeKey="activeKey"
    hide-add
    type="editable-card"
    class="tabs"
    :class="{ isNotRealDark: stylePrimary.key !== 'realDark' }"
		@tabClick="handleTabPane"
  >
    <a-tab-pane v-for="pane in panes" :key="pane.path" :tab="pane.title" :closable="pane.path === activeKey" />
  </a-tabs>
  <div class="content" :class="{ isNotRealDark: stylePrimary.key !== 'realDark' }">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'
import { useTabsStore } from '@/store/useTabs'

const LayoutSettingStore = useLayoutSetting()
const { stylePrimary } = storeToRefs(LayoutSettingStore)

const tabsStore = useTabsStore()
const { activeKey, panes } = storeToRefs(tabsStore)

const handleTabPane = () => {
  console.log('点击了一下')
}
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
