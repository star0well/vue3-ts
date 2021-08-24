import type { Module } from 'vuex';
import type { ISystemState } from './types';
import { IRootState } from '@/store/main/types';
import { getPageListData } from '@/service/main/system/system';
const systemModule: Module<ISystemState, IRootState> = {
	namespaced: true,
	state() {
		return {
			userList: [],
			userCount: 0
		};
	},
	mutations: {
		changeUserList(state, userList: any[]) {
			state.userList = userList;
		},
		changeUserCount(state, userCount: number) {
			state.userCount = userCount;
		}
	},
	actions: {
		async getPageListAction({ commit }, payload) {
			console.log(payload.url);
			console.log(payload.queryInfo);

			//发送请求
			const pageResult = await getPageListData(payload.url, payload.queryInfo);
			console.log(pageResult);
			const { list, totalCount } = pageResult.data;
			commit('changeUserList', list);
			commit('changeUserCount', totalCount);
		}
	}
};
export default systemModule;
