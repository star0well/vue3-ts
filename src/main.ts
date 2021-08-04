import { createApp } from "vue";
import { registterApp } from "./global";
import "normalize.css";
import "./assets/css/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./service/axios_demo";
import hyRequest from "./service";
const app = createApp(App);
registterApp(app);
app.use(router);
app.use(store);
app.mount("#app");

interface DataType {
	data: any;
	retrunCode: string;
	success: boolean;
}
hyRequest
	.request<DataType>({
		url: "/home/multidata",
		method: "get",
		showLoading: false,
		interceptors: {
			requestInterceptor: (config) => {
				console.log("单独拦截");

				return config;
			}
		}
	})
	.then((res) => {
		console.log(res.data);
		console.log("main 程序打印");
	});
