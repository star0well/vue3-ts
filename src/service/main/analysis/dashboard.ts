import hyRequest from '@/service';

enum DashboardAPI {
	categoryGoodsCount = '/goods/category/count',
	categoryGoodsFavor = '/goods/category/favor',
	categoryGoodsSale = '/goods/category/sale',
	addressGoodsSale = '/goods/address/sale',
	goodsAmountList = './goods/amount/list'
}
export function getCategoryGoodsCount() {
	return hyRequest.get({
		url: DashboardAPI.categoryGoodsCount
	});
}
export function getCategoryGoodsFavor() {
	return hyRequest.get({
		url: DashboardAPI.categoryGoodsFavor
	});
}
export function getCategoryGoodsSale() {
	return hyRequest.get({
		url: DashboardAPI.categoryGoodsSale
	});
}
export function getCategoryGoodsAddressSale() {
	return hyRequest.get({
		url: DashboardAPI.addressGoodsSale
	});
}
export function getCategoryGoodsAmountList() {
	return hyRequest.get({
		url: DashboardAPI.goodsAmountList
	});
}
