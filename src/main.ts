import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import { setupAntDesign } from './plugins/antDesign'

const app = createApp(App)

setupAntDesign(app)

app.mount('#app')
