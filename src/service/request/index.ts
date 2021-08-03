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
				if (this.showLoading) {
					this.loading = ElLoading.service({
						lock: true,
						text: "正在请求",
						background: "rgb(0,0,0,0.5)"
					});
				}
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
				} else return data;
			},
			(err) => {
				if (err.response.status === 404) {
					console.log("404错误");
				}
				return err;
			}
		);
	}
	request<T>(config: HYRequestConfig<T>): Promise<T> {
		return new Promise((resolve) => {
			if (config.interceptors?.requestInterceptor) {
				config = config.interceptors.requestInterceptor(config);
			}
			if (config.showLoading === false) {
				this.showLoading = config.showLoading;
			}
			this.instance
				.request<any, T>(config)
				.then((res) => {
					if (config.interceptors?.responseInterceptor) {
						res = config.interceptors.responseInterceptor(res);
					}
					this.showLoading = true;
					console.log("测试");
					resolve(res);
					console.log(res);
				})
				.catch((err) => {
					this.showLoading = true;
					return err;
				});
		});
	}
	get<T>(config: HYRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "get" });
	}
	post<T>(config: HYRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "post" });
	}
	delete<T>(config: HYRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "delete" });
	}
	patch<T>(config: HYRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "patch" });
	}
}

export default HyRequest;
