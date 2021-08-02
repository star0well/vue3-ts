// 统一出口
import { BASE_URL, TIME_OUT } from "./request/config";
import HyRequest from "./request/index";
const hyRequest = new HyRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	interceptors: {
		requestInterceptor: (config) => {
			console.log("拦截成功");
			return config;
		}
	}
});

export default hyRequest;
