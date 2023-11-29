<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-if="layoutPrimary === 'sidemenu'"
      v-model:collapsed="collapsed"
      collapsible
      :theme="stylePrimary.value"
    >
      <Menu mode="inline" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header" :class="{ isNotRealDark: getIsNotRealDark() }">
        <Header />
      </a-layout-header>
      <a-layout-content>
				<Content />
      </a-layout-content>
      <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'
import Header from './header/index.vue'
import Content from './content/index.vue'
import Menu from './menu/index.vue'

const collapsed = ref<boolean>(false)

const store = useLayoutSetting()
const { layoutPrimary, stylePrimary } = storeToRefs(store)

const getIsNotRealDark = (): boolean => {
  if (layoutPrimary.value === 'sidemenu') {
    if (stylePrimary.value.key !== 'realDark') {
      return true
    } else {
      return false
    }
  } else {
    if (stylePrimary.value.key === 'light') {
      return true
    } else {
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  padding: 0;
}
.isNotRealDark {
  background: #fff;
}
</style>
