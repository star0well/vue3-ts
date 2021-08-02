import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface HYRequestInterceptors {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
	requestInterceptorCath?: (error: any) => any;
	responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
	responseInterceptorCath?: (error: any) => any;
}
export interface HYRequestConfig extends AxiosRequestConfig {
	interceptors?: HYRequestInterceptors;
}
