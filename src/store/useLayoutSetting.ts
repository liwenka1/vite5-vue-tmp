import { defineStore } from 'pinia'
import { ref } from 'vue'
import { theme } from 'ant-design-vue'
import { ThemeStyle } from '@/components/theme/constant'

const { defaultAlgorithm } = theme

export const useLayoutSetting = defineStore('layoutSetting', () => {
  const colorPrimary = ref('#1677FF')
  const layoutPrimary = ref('sidemenu')
  const stylePrimary = ref<ThemeStyle>({
    label: '亮色主题风格',
    key: 'light',
    value: 'light',
    algorithm: defaultAlgorithm
  })

  return { colorPrimary, layoutPrimary, stylePrimary }
})
