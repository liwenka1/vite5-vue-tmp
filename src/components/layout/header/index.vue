<template>
  <div class="header">
    <div>
      <Breadcrumb />
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
