import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import './styles/index.scss'
import App from './App.vue'
import { setupAntDesign } from './plugins/index'
import router from './router/index'

const pinia = createPinia()

const app = createApp(App)

app.use(router)

app.use(pinia)

setupAntDesign(app)

app.mount('#app')
