import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface HYRequestInterceptors<T = AxiosResponse> {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
	requestInterceptorCath?: (error: any) => any;
	responseInterceptor?: (res: T) => T;
	responseInterceptorCath?: (error: any) => any;
}
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptors?: HYRequestInterceptors<T>;
	showLoading?: boolean;
}
