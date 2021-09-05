import { Module } from 'vuex';
import { IDashboardState } from './types';
import { IRootState } from '@/store/main/types';
import {
	getCategoryGoodsCount,
	getCategoryGoodsAddressSale,
	getCategoryGoodsFavor,
	getCategoryGoodsSale
} from '@/service/main/analysis/dashboard';

const dashboardModule: Module<IDashboardState, IRootState> = {
	namespaced: true,
	state: () => {
		return {
			categoryGoodsCount: [],
			categoryGoodsFavor: [],
			categoryGoodsSale: [],
			addressGoodsSale: []
		};
	},
	mutations: {
		changeCategoryGoodsCount(state, count) {
			state.categoryGoodsCount = count;
		},
		changeCategoryGoodsFavor(state, favor) {
			state.categoryGoodsFavor = favor;
		},
		changeCategoryGoodsSale(state, sale) {
			state.categoryGoodsSale = sale;
		},
		changeCategoryGoodsAddressSale(state, addressSale) {
			state.addressGoodsSale = addressSale;
		}
	},
	actions: {
		async getDashboardDataAction({ commit }) {
			const categoryCountResult = await getCategoryGoodsCount();
			const categoryFavorResult = await getCategoryGoodsFavor();
			const categorySaleResult = await getCategoryGoodsSale();
			const categoryAddressSale = await getCategoryGoodsAddressSale();

			commit('changeCategoryGoodsCount', categoryCountResult.data);
			commit('changeCategoryGoodsFavor', categoryFavorResult.data);
			commit('changeCategoryGoodsSale', categorySaleResult.data);
			commit('changeCategoryGoodsAddressSale', categoryAddressSale.data);
		}
	}
};

export default dashboardModule;
