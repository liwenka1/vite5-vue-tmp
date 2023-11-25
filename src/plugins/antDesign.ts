import type { App } from 'vue'
import {
  Layout,
  LayoutSider,
  Menu,
  MenuItem,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  SubMenu,
  Breadcrumb,
  BreadcrumbItem
} from 'ant-design-vue'

const components = [
  Layout,
  LayoutSider,
  Menu,
  MenuItem,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  SubMenu,
  Breadcrumb,
  BreadcrumbItem
]

export const setupAntDesign = (app: App<Element>) => {
  for (const component of components) {
    app.component(component.name, component)
  }
}
