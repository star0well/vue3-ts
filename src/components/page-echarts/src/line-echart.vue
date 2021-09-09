<template>
	<div class="pie-echart">
		<div>
			<base-echart :option="option"></base-echart>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import BaseEchart from '@/base-ui/echart';

const props = defineProps<{
	xLables: string[];
	values: any[];
}>();
const option = computed(() => {
	return {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: props.xLables
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '类别的销量',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: props.values
			}
		]
	};
});
</script>

<style scoped></style>
