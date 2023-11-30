import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

interface Pane {
  title: string
  name: string
}

export const useTabsStore = defineStore('tabs', () => {
  const activeKey = ref<Pane['name']>('home-home')
  const setActiveKey = (pane: Pane) => {
    activeKey.value = pane['name']
  }
  watch(
    () => activeKey.value,
    () => {
      selectedKeys.value[0] = activeKey.value
      const keys = activeKey.value.split('-')
      let name = ''
      for (const key of keys) {
        name += key
        openKeys.value.push(name)
        name += '-'
      }
    }
  )

  const keys = ref<Set<string>>(new Set(['home-home']))
  const addKey = (key: string) => {
    keys.value.add(key)
  }

  const panes = ref<Pane[]>([
    {
      title: '首页',
      name: 'home-home'
    }
  ])
  const addPane = (pane: Pane) => {
    panes.value.push(pane)
  }

  const selectedKeys = ref<string[]>(['home-home'])
  const openKeys = ref<string[]>(['home'])

  return { activeKey, setActiveKey, keys, addKey, panes, addPane, selectedKeys, openKeys }
})
