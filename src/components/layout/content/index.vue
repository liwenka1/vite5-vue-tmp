<template>
  <a-tabs
    v-model:activeKey="activeKey"
    hide-add
    type="editable-card"
    class="tabs"
    :class="{ isNotRealDark: stylePrimary.key !== 'realDark' }"
    @tabClick="handleTabPane"
  >
    <a-tab-pane v-for="pane in panes" :key="pane.name" :tab="pane.title" :closable="pane.name === activeKey" />
  </a-tabs>
  <div class="content" :class="{ isNotRealDark: stylePrimary.key !== 'realDark' }">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'
import { useTabsStore } from '@/store/useTabs'
import { useRouter } from 'vue-router'

const LayoutSettingStore = useLayoutSetting()
const { stylePrimary } = storeToRefs(LayoutSettingStore)

const tabsStore = useTabsStore()
const { activeKey, panes } = storeToRefs(tabsStore)

const router = useRouter()
const handleTabPane = (name: string) => {
  console.log(activeKey.value)

  router.push({ name })
}
</script>

<style lang="scss" scoped>
.content {
  margin: 16px;
  padding: 24px;
  min-height: 360px;
}
.isNotRealDark {
  background: #fff;
}
</style>
