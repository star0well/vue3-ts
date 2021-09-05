import { IRootState, IStoreType } from './types';

import login from '../login/login';
import system from '../main/system/system';
import dashboard from '../main/analysis/dashboard';

import { createStore, useStore as useVuexStore, Store } from 'vuex';
import { getPageListData } from '@/service/main/system/system';
const store = createStore<IRootState>({
	state: () => {
		return {
			name: ' star0well',
			age: 17,
			entireDepartment: [],
			entireRole: [],
			entireMenu: []
		};
	},
	mutations: {
		changeEntireDepartment(state, list) {
			state.entireDepartment = list;
		},
		changeEntireRole(state, list) {
			state.entireRole = list;
		},
		changeEntireMenu(state, list) {
			state.entireMenu = list;
		}
	},
	actions: {
		async getInitiaDataAction({ commit }) {
			//请求部门和角色列表
			const departmentResult = await getPageListData('/department/list', {
				offset: 0,
				size: 100
			});
			const { list: departmentList } = departmentResult.data;
			const roleResult = await getPageListData('/role/list', {
				offset: 0,
				size: 100
			});
			const { list: roleList } = roleResult.data;

			const menuResult = await getPageListData('/menu/list', {});
			const { list: menuList } = menuResult.data;
			commit('changeEntireMenu', menuList);
			commit('changeEntireDepartment', departmentList);
			commit('changeEntireRole', roleList);
		}
	},
	modules: { login, system, dashboard }
});

export function setupStore() {
	store.dispatch('login/loadLoaclLogin');
}

export function useStore(): Store<IStoreType> {
	return useVuexStore();
}
export default store;
