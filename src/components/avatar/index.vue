<template>
  <a-dropdown :trigger="['click']" placement="bottom" arrow>
    <a-avatar class="avatar" @click.prevent>
      <template #icon><UserOutlined /></template>
    </a-avatar>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">个人设置</a-menu-item>
        <a-menu-item key="1">关于</a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3" @click="handleLogout">退出系统</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleLogout = () => {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.avatar {
  cursor: pointer;
}
</style>
