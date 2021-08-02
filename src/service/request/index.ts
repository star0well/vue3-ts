import axios from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./type";
import type { AxiosInstance } from "axios";
import { ElLoading } from "element-plus";
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type";

class HyRequest {
	instance: AxiosInstance;
	interceptors?: HYRequestInterceptors;
	loading?: ILoadingInstance;
	showLoading: boolean;
	constructor(config: HYRequestConfig) {
		this.instance = axios.create(config);
		this.interceptors = config.interceptors;
		this.showLoading = config.showLoading ?? true;
		this.instance.interceptors?.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorCath
		);
		this.instance.interceptors?.response.use(
			this.interceptors?.responseInterceptor,
			this.interceptors?.responseInterceptorCath
		);
		this.instance.interceptors.request.use(
			(config) => {
				this.loading = ElLoading.service({
					lock: true,
					text: "正在请求",
					background: "rgb(0,0,0,0.5)"
				});
				console.log("所有实例拦截器：请求拦截成功");
				return config;
			},
			(err) => {
				return err;
			}
		);
		this.instance.interceptors.response.use(
			(res) => {
				console.log("所有实例拦截器：相应拦截成功");
				setTimeout(() => {
					this.loading?.close();
				}, 1000);

				const data = res.data;
				if (data.returnCode === "-1001") {
					console.log("请求失败，错误信息：-1001");
				} else return res.data;
			},
			(err) => {
				if (err.response.status === 404) {
					console.log("404错误");
				}
				return err;
			}
		);
	}
	request(config: HYRequestConfig): void {
		if (config.interceptors?.requestInterceptor) {
			config = config.interceptors.requestInterceptor(config);
		}
		this.instance.request(config).then((res) => {
			if (config.interceptors?.responseInterceptor) {
				res = config.interceptors.responseInterceptor(res);
			}

			console.log(res);
		});
	}
}

export default HyRequest;
