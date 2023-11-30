import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Pane {
  title: string
  path: string
}

export const useTabsStore = defineStore('tabs', () => {
  const activeKey = ref<Pane['path']>('/home')
  const setActiveKey = (pane: Pane) => {
    activeKey.value = pane['path']
  }

  const keys = ref<Set<string>>(new Set())
  const addKey = (key: string) => {
    keys.value.add(key)
  }

  const panes = ref<Pane[]>([
    {
      title: '首页',
      path: '/home'
    }
  ])
  const addPane = (pane: Pane) => {
    panes.value.push(pane)
  }

  return { activeKey, setActiveKey, keys, addKey, panes, addPane }
})
