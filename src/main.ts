import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import { setupNaive } from './plugins'

const app = createApp(App)

setupNaive(app)

app.mount('#app')
