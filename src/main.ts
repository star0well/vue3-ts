import { createApp } from "vue";
import { registterApp } from "./global";
import "normalize.css";
import "./assets/css/index.css";
import App from "./App.vue";
import router from "./router";
import store from "@/store/main/index";
import { setupStore } from "@/store/main/index";
const app = createApp(App);
registterApp(app);

setupStore();
app.use(router);
app.use(store);

app.mount("#app");
