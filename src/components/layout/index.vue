<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-if="layoutPrimary === 'sidemenu'"
      v-model:collapsed="collapsed"
      collapsible
      :theme="stylePrimary.value"
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline" :theme="stylePrimary.value">
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
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header" :class="{ isNotRealDark: stylePrimary.key !== 'realDark' }">
        <Header v-if="layoutPrimary === 'sidemenu'" />
        <div v-if="layoutPrimary === 'topmenu'" class="topmenu">
          <div class="logo" />
          <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal">
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
      </a-layout-header>
      <a-layout-content>
        <div class="content" :class="{ isNotRealDark: stylePrimary.key !== 'realDark' }">
          <RouterView />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import Header from './header/index.vue'
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])
const router = useRouter()
const handleMenu = (key: string) => {
  router.push(key)
}

const store = useLayoutSetting()
const { layoutPrimary, stylePrimary } = storeToRefs(store)
</script>
<style lang="scss" scoped>
.logo {
  height: 32px;
  margin: 16px;
  width: 168px;
  background: rgba(255, 255, 255, 0.3);
}
.topmenu {
  display: flex;
}
.header {
  padding: 0;
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
