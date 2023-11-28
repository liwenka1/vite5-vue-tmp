<template>
  <a-button type="primary" @click="showDrawer" shape="circle" :icon="h(SettingOutlined)"></a-button>
  <a-drawer v-model:open="open" placement="right" @after-open-change="afterOpenChange">
    <a-descriptions title="主题风格">
      <a-descriptions-item v-for="style in themeStyle" :key="style.value">
        <a-tooltip>
          <template #title>{{ style.label }}</template>
          <div class="style-checbox-item">
            <SvgIcon name="vue" size="50"></SvgIcon>
          </div>
        </a-tooltip>
      </a-descriptions-item>
    </a-descriptions>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue'
import { SettingOutlined } from '@ant-design/icons-vue'
import { themeStyle } from './constant'
const open = ref<boolean>(false)

const afterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}

const showDrawer = () => {
  open.value = true
}
</script>
<style lang="scss" scoped>
.style-checbox-item {
  position: relative;
  cursor: pointer;

  &::after {
    content: '✔';
    position: absolute;
    right: 12px;
    bottom: 10px;
    color: $primaryColor;
  }
}
</style>
