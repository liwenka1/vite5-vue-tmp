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
  BreadcrumbItem,
  Button,
  InputNumber,
  ConfigProvider
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
  BreadcrumbItem,
  Button,
  InputNumber,
  ConfigProvider
]

export const setupAntDesign = (app: App<Element>) => {
  for (const component of components) {
    app.component(component.name, component)
  }
}
