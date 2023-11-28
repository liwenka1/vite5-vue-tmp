<template>
  <a-button type="primary" @click="showDrawer" shape="circle" :icon="h(SettingOutlined)"></a-button>
  <a-drawer v-model:open="open" placement="right">
    <a-descriptions title="主题风格" :column="5">
      <a-descriptions-item v-for="style in themeStyle" :key="style.key">
        <a-tooltip>
          <template #title>{{ style.label }}</template>
          <div
            class="style-checbox-item"
            :class="{ active: stylePrimary.key === style.key }"
            @click="setStylePrimary(style)"
          >
            <SvgIcon :name="style.value" size="50"></SvgIcon>
          </div>
        </a-tooltip>
      </a-descriptions-item>
    </a-descriptions>
    <a-descriptions title="主题颜色" :column="4">
      <a-descriptions-item v-for="color in themeColor" :key="color.key">
        <div class="style-checbox-item">
          <a-tooltip>
            <template #title>{{ color.label }}</template>
            <a-tag :color="color.value" @click="setColorPrimary(color.value)">
              <span :class="{ colorNoActive: colorPrimary !== color.value }">✔</span>
            </a-tag>
          </a-tooltip>
        </div>
      </a-descriptions-item>
    </a-descriptions>
    <a-descriptions title="布局风格" :column="5">
      <a-descriptions-item v-for="layout in themeLayout" :key="layout.value">
        <a-tooltip>
          <template #title>{{ layout.label }}</template>
          <div
            class="style-checbox-item"
            :class="{ active: layoutPrimary === layout.value }"
            @click="setLayoutPrimary(layout.value)"
          >
            <SvgIcon :name="layout.value" size="50"></SvgIcon>
          </div>
        </a-tooltip>
      </a-descriptions-item>
    </a-descriptions>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue'
import { SettingOutlined } from '@ant-design/icons-vue'
import { themeStyle, themeLayout, themeColor } from './constant'
import { useLayoutSetting } from '@/store/useLayoutSetting'
import { storeToRefs } from 'pinia'

const open = ref<boolean>(false)
const showDrawer = () => {
  open.value = true
}

const store = useLayoutSetting()
const { colorPrimary, layoutPrimary, stylePrimary } = storeToRefs(store)
const { setColorPrimary, setLayoutPrimary, setStylePrimary } = store
</script>
<style lang="scss" scoped>
.style-checbox-item {
  position: relative;
  cursor: pointer;

  &.active::after {
    content: '✔';
    position: absolute;
    right: 12px;
    bottom: 10px;
    color: $primaryColor;
  }
}
.colorNoActive {
  visibility: hidden;
}
</style>
