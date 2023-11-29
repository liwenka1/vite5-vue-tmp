import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Pane {
  title: string
  content: string
  key: string
  closable: boolean
}

export const useTabsStore = defineStore('tabs', () => {
  const activeKey = ref<Pane['key']>()

  const panes = ref<Pane[]>([])

  return { activeKey, panes }
})
