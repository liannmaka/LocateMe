import App from "@/App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import "maplibre-gl/dist/maplibre-gl.css";
import "./style.css";
import "animate.css";
import "flowbite";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
