import { defineStore } from 'pinia'
import { ref } from 'vue'
import { theme } from 'ant-design-vue'
import { ThemeStyle, ThemeColor, ThemeLayout } from '@/components/theme/constant'

const { defaultAlgorithm } = theme

export const useLayoutSetting = defineStore('layoutSetting', () => {
  const colorPrimary = ref<ThemeColor>('#1677FF')
  const layoutPrimary = ref<ThemeLayout>('sidemenu')
  const stylePrimary = ref<ThemeStyle>({
    label: '亮色主题风格',
    key: 'light',
    value: 'light',
    algorithm: defaultAlgorithm
  })
  const setColorPrimary = (color: ThemeColor) => {
    colorPrimary.value = color
  }
  const setLayoutPrimary = (layout: ThemeLayout) => {
    layoutPrimary.value = layout
  }
  const setStylePrimary = (style: ThemeStyle) => {
    stylePrimary.value = style
  }

  return { colorPrimary, layoutPrimary, stylePrimary, setColorPrimary, setLayoutPrimary, setStylePrimary }
})
