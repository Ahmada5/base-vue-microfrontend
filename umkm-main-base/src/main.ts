import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles' // Import Vuetify styles
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Import Material Design Icons

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
app.use(vuetify) // Use Vuetify
app.mount('#app')
