import { createApp } from 'vue'
import 'normalize.css'
import './styles/index.scss'
import App from './App.vue'
import { setupAntDesign } from './plugins/index'
import router from './router/index'

const app = createApp(App)

app.use(router)

setupAntDesign(app)

app.mount('#app')
