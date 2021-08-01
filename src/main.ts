import { createApp } from "vue";
import { registterApp } from "./global";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./service/axios_demo";

const app = createApp(App);
registterApp(app);
app.use(router);
app.use(store);
app.mount("#app");
