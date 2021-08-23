// 统一出口
import { BASE_URL, TIME_OUT } from './request/config';
import localCache from '@/utils/cache';
import HyRequest from './request/index';
const hyRequest = new HyRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,

	interceptors: {
		requestInterceptor: (config) => {
			const token = localCache.getCathe('token');
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}

			return config;
		}
	}
});

export default hyRequest;
