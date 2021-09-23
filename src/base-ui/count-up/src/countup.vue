<template>
	<span ref="spanRef"></span>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { CountUp } from 'countup.js';
import type { CountUpOptions } from 'countup.js';

export default defineComponent({
	props: {
		value: {
			type: Number,
			default: 0
		},
		option: {
			type: Object,
			default: () => ({})
		}
	},
	setup(props) {
		const spanRef = ref();
		const instance = ref<CountUp>();
		const defaultOptions: CountUpOptions = {
			decimalPlaces: 2, // 保留两位
			duration: 2, // 动画时长
			separator: ',', // 千位分割
			decimal: '.', // 小数分割
			prefix: '￥' // 单位
		};
		watch(
			() => props.value,
			() => {
				update(props.value);
			}
		);
		onMounted(() => {
			createCounter();
		});
		const createCounter = () => {
			const ops = Object.assign(defaultOptions, props.option);
			instance.value = new CountUp(spanRef.value, props.value, ops);
			instance.value.start();
		};
		const update = (number: number) => {
			instance.value?.update(number);
		};
		return { spanRef };
	}
});
</script>

<style scoped></style>
