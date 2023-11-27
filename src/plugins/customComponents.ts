import type { App } from 'vue'
import SvgIcon from '@/components/svgIcon/index.vue'

export const setupCustomComponents = (app: App) => {
  app.component('SvgIcon', SvgIcon)
}
