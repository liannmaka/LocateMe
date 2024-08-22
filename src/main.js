import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'maplibre-gl/dist/maplibre-gl.css';
import App from '@/App.vue';
import './style.css'
import { router } from './router';
import 'animate.css';
import 'flowbite';


const app = createApp(App);
const pinia = createPinia();

app.use(router)
app.use(pinia);
app.mount('#app');

