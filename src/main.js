import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CompOne from './components/CompOne.vue'
import CompTwo from './components/CompTwo.vue'
import CompThree from './components/CompThree.vue'


// createApp(App).mount('#app')
const app = createApp(App)
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
app.component('comp-three', CompThree)
app.mount('#app')
                  