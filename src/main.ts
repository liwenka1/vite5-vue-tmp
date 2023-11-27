import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from '@/plugins/index'
import router from '@/router/index'

const app = createApp(App)

setupPlugins(app)

app.use(router)

app.mount('#app')
