import Home from '@/views/home/index.vue'
import About from '@/views/about/index.vue'
import { RouteRecordRaw } from 'vue-router'
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons-vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        meta: { title: '首页', icon: PieChartOutlined },
        component: Home
      },
      {
        path: '/about',
        meta: { title: '关于', icon: DesktopOutlined },
        component: About
      }
    ]
  }
]

export default routes
