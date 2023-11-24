import type { App, Plugin } from 'vue'
import {
  Layout,
  LayoutSider,
  Menu,
  MenuItem,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  SubMenu,
  Breadcrumb
} from 'ant-design-vue'

const components = [Layout, LayoutSider, Menu, MenuItem, LayoutContent, LayoutFooter, LayoutHeader, SubMenu, Breadcrumb]

export const setupAntDesign = (app: App<Element>) => {
  for (const component of components) {
    app.use(component as Plugin<[]>)
  }
}
