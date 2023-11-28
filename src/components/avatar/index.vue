<template>
  <a-dropdown :trigger="['click']">
    <a-avatar class="avatar" @click.prevent>
      <template #icon><UserOutlined /></template>
    </a-avatar>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">设置</a-menu-item>
        <a-menu-item key="1">关于</a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">退出</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue'
</script>

<style lang="scss" scoped>
.avatar {
  cursor: pointer;
}
</style>
