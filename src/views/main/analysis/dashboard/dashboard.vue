<template>
	<div class="dashboard">
		<el-row :gutter="12">
			<template v-for="item in goodsAmountList" :key="item.title">
				<el-col :md="12" :lg="6" :xl="6">
					<statistical-panel :panelData="item" />
				</el-col>
			</template>
		</el-row>
		<el-row :gutter="10">
			<el-col :span="7">
				<hy-card title="分类商品数量(拼图)">
					<pie-echart :pieData="categoryGoodsCount"></pie-echart>
				</hy-card>
			</el-col>
			<el-col :span="10">
				<hy-card title="不同城市商品销量">
					<map-echart :mapData="addressGoodsSale"></map-echart>
				</hy-card>
			</el-col>
			<el-col :span="7">
				<hy-card title="分类商品数量(玫瑰图)">
					<rose-echart :roseData="categoryGoodsCount"></rose-echart>
				</hy-card>
			</el-col>
		</el-row>
		<el-row :gutter="10" class="content-row">
			<el-col :span="12">
				<hy-card title="分类商品的销量">
					<line-echart v-bind="categoryGoodsSale"></line-echart>
				</hy-card>
			</el-col>
			<el-col :span="12">
				<hy-card title="分类商品的收藏">
					<bar-echart v-bind="categoryGoodsFavor"></bar-echart>
				</hy-card>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store/main';
import HyCard from '@/base-ui/card';
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts';
import StatisticalPanel from '@/components/statistical-panel';

export default defineComponent({
	name: 'dashboard',
	components: {
		HyCard,
		PieEchart,
		RoseEchart,
		LineEchart,
		BarEchart,
		MapEchart,
		StatisticalPanel
	},

	setup() {
		const store = useStore();
		store.dispatch('dashboard/getDashboardDataAction');

		const categoryGoodsCount = computed(() => {
			return store.state.dashboard.categoryGoodsCount.map((item: any) => {
				return { name: item.name, value: item.goodsCount };
			});
		});
		const goodsAmountList = computed(() => store.state.dashboard.goodsAmountList);
		const categoryGoodsSale = computed(() => {
			const xLables: string[] = [];
			const values: any[] = [];
			const categoryGoodsSale = store.state.dashboard.categoryGoodsSale;
			for (const item of categoryGoodsSale) {
				xLables.push(item.name);
				values.push(item.goodsCount);
			}

			return {
				xLables,
				values
			};
		});
		const categoryGoodsFavor = computed(() => {
			const xLables: any[] = [];
			const values: number[] = [];
			const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor;
			for (const item of categoryGoodsFavor) {
				xLables.push(item.name);
				values.push(item.goodsFavor);
			}
			return { xLables, values };
		});
		const addressGoodsSale = computed(() => {
			return store.state.dashboard.addressGoodsSale.map((item: any) => {
				return { name: item.address, value: item.count };
			});
		});
		return {
			categoryGoodsCount,
			categoryGoodsSale,
			categoryGoodsFavor,
			addressGoodsSale,
			goodsAmountList
		};
	}
});
</script>

<style scoped>
.content-row {
	margin-top: 20px;
}
</style>
