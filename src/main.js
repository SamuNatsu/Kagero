/* Main entrance */
import { createApp } from 'vue'

// Global stylesheet
import 'normalize.css'
import './style.css'

// Application component
import App from './App.vue'

// Create application
createApp(App)
  .mount('#app')
