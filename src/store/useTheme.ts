import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const themeData = ref({
    borderRadius: 6,
    colorPrimary: '#1677ff'
  })

  return { themeData }
})
