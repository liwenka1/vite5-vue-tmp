import type { App } from 'vue'
import {
  // create naive ui
  create,
  // component
  NButton,
  NSpace,
  NSwitch,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NLayoutFooter,
  NMenu
} from 'naive-ui'

const naive = create({
  components: [NButton, NSpace, NSwitch, NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NLayoutFooter, NMenu]
})

export const setupNaive = (app: App<Element>) => {
  app.use(naive)
}
