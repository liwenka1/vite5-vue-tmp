import Login from '@/views/login/index.vue'
import Layout from '@/components/layout/index.vue'
import Home from '@/views/home/index.vue'
import About from '@/views/about/index.vue'
import { RouteRecordRaw } from 'vue-router'
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons-vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: { hideInMenu: true },
    component: Login
  },
  {
    path: '/',
    redirect: '/home',
    meta: { hideInMenu: true }
  },
  {
    path: '/home',
    name: 'home',
		redirect: '/home/home',
    meta: { title: '首页', icon: PieChartOutlined },
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home-home',
        meta: { title: '首页', icon: PieChartOutlined },
        component: Home
      },
      {
        path: 'about',
        name: 'home-about',
        meta: { title: '关于', icon: DesktopOutlined },
        component: About
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
		redirect: '/test/test1',
    meta: { title: '测试', icon: PieChartOutlined },
    component: Layout,
    children: [
      {
        path: 'test1',
        name: 'test-test1',
        meta: { title: '测试1', icon: PieChartOutlined },
        children: [
          {
            path: 'test11',
            name: 'test-test1-test11',
            meta: { title: '测试11', icon: PieChartOutlined },
            component: Home
          },
          {
            path: 'test12',
            name: 'test-test1-test12',
            meta: { title: '测试12', icon: DesktopOutlined },
            component: About
          }
        ]
      },
      {
        path: 'test2',
        name: 'test-test2',
        meta: { title: '测试2', icon: DesktopOutlined },
        component: About
      }
    ]
  }
]

export default routes
