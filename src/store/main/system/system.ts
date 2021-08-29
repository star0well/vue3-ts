import type { Module } from 'vuex';
import type { ISystemState } from './types';
import { IRootState } from '@/store/main/types';
import { getPageListData } from '@/service/main/system/system';
const systemModule: Module<ISystemState, IRootState> = {
	namespaced: true,
	state() {
		return {
			userList: [],
			userCount: 0,
			roleList: [],
			roleCount: 0
		};
	},
	mutations: {
		changeUsersList(state, userList: any[]) {
			state.userList = userList;
		},
		changeUsersCount(state, userCount: number) {
			state.userCount = userCount;
		},
		changeRoleList(state, list: any[]) {
			state.roleList = list;
		},
		changeRoleCount(state, count: number) {
			state.roleCount = count;
		}
	},
	getters: {
		pageListData(state) {
			return (pageName: string) => {
				switch (pageName) {
					case 'users':
						return state.userList;

					case 'role':
						return state.roleList;
				}
			};
		}
	},
	actions: {
		async getPageListAction({ commit }, payload) {
			const pageName = payload.pageName;
			const pageUrl = `/${pageName}/list`;

			//发送请求
			const pageResult = await getPageListData(pageUrl, payload.queryInfo);

			const { list, totalCount } = pageResult.data;

			const changePageName =
				pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
			commit(`change${changePageName}List`, list);
			commit(`change${changePageName}Count`, totalCount);
		}
	}
};
export default systemModule;
