import type { Module } from 'vuex';
import type { ISystemState } from './types';
import { IRootState } from '@/store/main/types';
import {
	getPageListData,
	deletePageData,
	createPageData,
	editPageData
} from '@/service/main/system/system';

const systemModule: Module<ISystemState, IRootState> = {
	namespaced: true,
	state() {
		return {
			usersList: [],
			usersCount: 0,
			roleList: [],
			roleCount: 0,
			goodsCount: 0,
			goodsList: [],
			menuList: [],
			menuCount: 0,
			departmentList: [],
			departmentCount: 0,
			categoryList: [],
			categoryCount: 0
		};
	},
	mutations: {
		changeUsersList(state, userList: any[]) {
			state.usersList = userList;
		},
		changeUsersCount(state, userCount: number) {
			state.usersCount = userCount;
		},
		changeRoleList(state, list: any[]) {
			state.roleList = list;
		},
		changeRoleCount(state, count: number) {
			state.roleCount = count;
		},
		changeGoodsList(state, list: any[]) {
			state.goodsList = list;
		},
		changeGoodsCount(state, count: number) {
			state.goodsCount = count;
		},
		changeMenuList(state, list: any[]) {
			state.menuList = list;
		},
		changeMenuCount(state, count: number) {
			state.menuCount = count;
		},
		changeDepartmentCount(state, count: number) {
			state.departmentCount = count;
		},
		changeDepartmentList(state, list: number) {
			state.departmentList = list;
		},
		changeCategoryCount(state, count: number) {
			state.categoryCount = count;
		},
		changeCategoryList(state, list: any) {
			state.categoryList = list;
		}
	},
	getters: {
		// pageListData(state) {
		// 	return (pageName: string) => {
		// 		switch (pageName) {
		// 			case 'users':
		// 				return state.usersList;

		// 			case 'role':
		// 				return state.roleList;
		// 			case 'goods':
		// 				return state.goodsList;
		// 		}
		// 	};
		// },
		// pageCountData(state) {
		// 	return (pageName: string) => {
		// 		switch (pageName) {
		// 			case 'users':
		// 				return state.usersCount;

		// 			case 'role':
		// 				return state.roleCount;
		// 			case 'goods':
		// 				return state.goodsCount;
		// 		}
		// 	};
		// }

		pageListData(state) {
			return (pageName: string) => {
				return (state as any)[`${pageName}List`];
			};
		},
		pageCountData(state) {
			return (pageName: string) => {
				return (state as any)[`${pageName}Count`];
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

			// const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
			// commit(`change${changePageName}List`, list);
			// commit(`change${changePageName}Count`, totalCount);
			switch (payload.pageName) {
				case 'users':
					commit('changeUsersCount', totalCount);
					commit('changeUsersList', list);
					break;
				case 'department':
					commit('changeDepartmentCount', totalCount);
					commit('changeDepartmentList', list);
					break;
				case 'role':
					commit('changeRoleCount', totalCount);
					commit('changeRoleList', list);
					break;
				case 'menu':
					commit('changeMenuList', list);
					break;
				case 'category':
					commit('changeCategoryCount', totalCount);
					commit('changeCategoryList', list);
					break;
				case 'goods':
					commit('changeGoodsCount', totalCount);
					commit('changeGoodsList', list);
					break;
				case 'story':
					commit('changeStoryCount', totalCount);
					commit('changeStoryList', list);
					break;
			}
		},
		async deletePageDataAction({ dispatch }, payload: any) {
			//pageName->/users
			//id->/users/id
			const { pageName, id } = payload;
			const pageUrl = `/${pageName}/${id}`;
			await deletePageData(pageUrl);
			//重新请求数据
			dispatch('getPageListAction', {
				pageName: pageName,
				queryInfo: {
					offset: 0,
					size: 10
				}
			});
		},
		async createPageDataAction({ dispatch }, payload) {
			//创建数据请求
			const { pageName, newData } = payload;
			const pageUrl = `/${pageName}`;
			await createPageData(pageUrl, newData);
			dispatch('getPageListAction', {
				pageName,
				queryInfo: {
					offset: 0,
					size: 10
				}
			});
		},
		async editPageDataAction({ dispatch }, payload: any) {
			// 1.编辑数据的请求
			const { pageName, editData, id } = payload;

			const pageUrl = `/${pageName}/${id}`;
			await editPageData(pageUrl, editData);

			// 2.请求最新的数据
			dispatch('getPageListAction', {
				pageName,
				queryInfo: {
					offset: 0,
					size: 10
				}
			});
		}
	}
};
export default systemModule;
