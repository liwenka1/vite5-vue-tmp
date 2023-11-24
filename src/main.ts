import { createApp } from 'vue'
import 'normalize.css'
import './styles/index.scss'
import App from './App.vue'
import { setupAntDesign } from './plugins/index'

const app = createApp(App)

setupAntDesign(app)

app.mount('#app')
