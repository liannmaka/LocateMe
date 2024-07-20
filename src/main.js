import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'maplibre-gl/dist/maplibre-gl.css';
import App from '@/App.vue';

const app = createApp(App);
const pinia = createPinia();

app.mount('#app');
app.use(pinia);
