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
  ConfigProvider,
  Input,
  Form,
  FormItem,
  Drawer,
  Avatar,
  Dropdown,
  MenuDivider
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
  ConfigProvider,
  Input,
  Form,
  FormItem,
  Drawer,
  Avatar,
  Dropdown,
  MenuDivider
]

export const setupAntDesign = (app: App) => {
  for (const component of components) {
    app.component(component.name, component)
  }
}
