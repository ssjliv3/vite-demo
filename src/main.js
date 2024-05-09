import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CompOne from './components/CompOne.vue'
import CompTwo from './components/CompTwo.vue'
import CompThree from './components/CompThree.vue'
import CompFour from './components/CompFour.vue'
import TypeWriters from './components/TypeWriters.vue'
import RollingDies from './components/RollingDies.vue'


// createApp(App).mount('#app')
const app = createApp(App)
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
app.component('comp-three', CompThree)
app.component('comp-four', CompFour)
app.component('type-writers', TypeWriters)
app.component('rolling-dies', RollingDies)
app.mount('#app')
                  