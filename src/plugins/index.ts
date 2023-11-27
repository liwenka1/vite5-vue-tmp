// 将插件统一导出
import type { App } from 'vue'
import { setupAntDesign } from './antDesign'
import { setupPinia } from './pinia'
import { setupAssets } from './assets'
import { setupCustomComponents } from './customComponents'

export const setupPlugins = (app: App) => {
  setupAssets()

  setupCustomComponents(app)

  setupAntDesign(app)

  setupPinia(app)
}
