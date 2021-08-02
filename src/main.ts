import { createApp } from "vue";
import { registterApp } from "./global";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./service/axios_demo";
import hyRequest from "./service";
const app = createApp(App);
registterApp(app);
app.use(router);
app.use(store);
app.mount("#app");

hyRequest.request({
	url: "/home/multidata",
	method: "get",
	interceptors: {
		requestInterceptor: (config) => {
			console.log("单独拦截");

			return config;
		}
	}
});
