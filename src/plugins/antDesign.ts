import type { App, Plugin } from 'vue'
import { Layout, LayoutSider, Menu, MenuItem, LayoutContent, LayoutFooter, LayoutHeader } from 'ant-design-vue'

const components = [Layout, LayoutSider, Menu, MenuItem, LayoutContent, LayoutFooter, LayoutHeader]

export const setupAntDesign = (app: App<Element>) => {
  for (const component of components) {
    app.use(component as Plugin<[]>)
  }
}
