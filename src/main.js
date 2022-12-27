import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/styles/appGlobal.css";
import "./assets/styles/cardGlobal.css";
import "./assets/styles/mc2Global.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
