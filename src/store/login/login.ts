import { ILoginState } from './types';
import { IRootState } from '../main/types';
import {
	accountLoginRequest,
	requestUserInfoById,
	requestUserMenuByRoleId
} from '@/service/login/login';
import { mapMenusToRoutes } from '@/utils/map-menus';
import router from '@/router';
import type { IAccount } from '@/service/login/types';
import localCache from '@/utils/cache';

import { Module } from 'vuex';
const LoginModule: Module<ILoginState, IRootState> = {
	namespaced: true,
	state() {
		return {
			token: '',
			userInfo: {},
			userMenus: []
		};
	},
	getters: {},
	mutations: {
		changeToken(state, token: string) {
			state.token = token;
		},

		changeUserInfo(state, userInfo) {
			state.userInfo = userInfo;
		},
		changeUserMenus(state, userMenus) {
			state.userMenus = userMenus;
			const routes = mapMenusToRoutes(userMenus);

			routes.forEach((route) => {
				router.addRoute('main', route);
			});
		}
	},

	actions: {
		async accountLoginAction({ commit }, payload: IAccount) {
			//用户登录
			const loginResult = await accountLoginRequest(payload);
			const { id, token } = loginResult.data;
			commit('changeToken', token);
			localCache.setCache('token', token);
			//请求用户信息
			const userInfoResult = await requestUserInfoById(id);
			const userInfo = userInfoResult.data;
			commit('changeUserInfo', userInfo);
			localCache.setCache('userInfo', userInfo);
			//获取角色菜单
			const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id);
			const userMenus = userMenuResult.data;
			commit('changeUserMenus', userMenus);
			localCache.setCache('userMenus', userMenus);
			//动态注册路由

			//跳转首页
			router.push('/main');
		},
		loadLoaclLogin({ commit }) {
			const token = localCache.getCathe('token');
			if (token) {
				commit('changeToken', token);
			}
			const userInfo = localCache.getCathe('userInfo');
			if (userInfo) {
				commit('changeUserInfo', userInfo);
			}
			const userMenus = localCache.getCathe('userMenus');
			if (userMenus) {
				commit('changeUserMenus', userMenus);
			}
		}
	}
};

export default LoginModule;
