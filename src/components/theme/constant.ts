import { theme } from 'ant-design-vue'

const { defaultAlgorithm, darkAlgorithm } = theme

/** 主题风格 **/
const themeStyle = [
  {
    label: '亮色主题风格',
    key: 'light',
    value: 'light',
    algorithm: defaultAlgorithm
  },
  {
    label: '暗色主题风格',
    key: 'dark',
    value: 'dark',
    algorithm: defaultAlgorithm
  },
  {
    label: '暗黑模式',
    key: 'realDark',
    value: 'dark',
    algorithm: darkAlgorithm
  }
] as const
type ThemeStyle = (typeof themeStyle)[number]

/** 主题颜色 */
const themeColor = [
  {
    label: '默认蓝',
    key: 'techBlue',
    value: '#1677FF'
  },
  {
    label: '薄暮',
    key: 'dust',
    value: '#F5222D'
  },
  {
    label: '火山',
    key: 'volcano',
    value: '#FA541C'
  },
  {
    label: '日暮',
    key: 'sunset',
    value: '#FAAD14'
  },
  {
    label: '明青',
    key: 'cyan',
    value: '#13C2C2'
  },
  {
    label: '极光绿',
    key: 'green',
    value: '#52C41A'
  },
  {
    label: '极客蓝',
    key: 'geekblue',
    value: '#2F54EB'
  },
  {
    label: '小黑紫',
    key: 'purple',
    value: '#722ED1'
  }
] as const
type ThemeColor = (typeof themeColor)[number]['value']

/** 布局风格 */
const themeLayout = [
  {
    label: '侧边菜单布局',
    value: 'sidemenu'
  },
  {
    label: '顶部菜单布局',
    value: 'topmenu'
  }
] as const
type ThemeLayout = (typeof themeLayout)[number]['value']

export { themeStyle, themeColor, themeLayout, type ThemeStyle, type ThemeColor, type ThemeLayout }
