import { IRootState, IStoreType } from './types';

import login from '../login/login';
import system from '../main/system/system';

import { createStore, useStore as useVuexStore, Store } from 'vuex';
const store = createStore<IRootState>({
	state: () => {
		return {
			name: '',
			age: 17
		};
	},
	modules: { login, system }
});
export function setupStore() {
	store.dispatch('login/loadLoaclLogin');
}

export function useStore(): Store<IStoreType> {
	return useVuexStore();
}
export default store;
