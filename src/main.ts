import { createApp } from 'vue'
import 'normalize.css'
import '@/styles/index.scss'
import App from './App.vue'
import { setupAntDesign, setupPinia } from '@/plugins/index'
import router from '@/router/index'

const app = createApp(App)

app.use(router)

setupAntDesign(app)

setupPinia(app)

app.mount('#app')
