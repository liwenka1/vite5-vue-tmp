<template>
  <a-form :model="themeData" name="theme" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
    <a-form-item name="colorPrimary" label="Primary Color">
      <input
        type="color"
        :value="themeData.colorPrimary"
        @input="
          (e) => {
            themeData.colorPrimary = (e.target as HTMLInputElement).value
          }
        "
      />
    </a-form-item>
    <a-form-item name="borderRadius" label="Border Radius">
      <a-input v-model:value="themeData.borderRadius" />
    </a-form-item>
    <a-form-item name="submit" :wrapper-col="{ offset: 4, span: 20 }">
      <a-button type="primary">submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { theme } from 'ant-design-vue'
import { useThemeStore } from '../../store/useTheme'
import { storeToRefs } from 'pinia'

const store = useThemeStore()
const { themeData } = storeToRefs(store)
const { token } = theme.useToken()
</script>
<style scoped>
input[type='color'] {
  border: 1px solid v-bind('token.colorBorder');
  background-color: v-bind('token.colorBgBase');
}
</style>
