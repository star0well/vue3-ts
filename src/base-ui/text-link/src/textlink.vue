<template>
	<div class="text-link">
		<template v-for="(item, index) of textArrs" :key="index">
			<div class="item">
				<span class="title"> {{ item.title }}</span>
				<el-link type="primary">{{ item.desp }}</el-link>
			</div>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		textArrs: {
			type: Array,
			default: () => []
		}
	},
	setup() {
		return {};
	}
});
</script>

<style scoped lang="less">
.text-link {
	text-align: left;
}
.item {
	margin: 5px;
}
.title {
	position: relative;
	display: inline-block;
	margin-right: 20px;
}
.title::before {
	position: absolute;
	top: 40%;
	left: -15px;
	width: 5px;
	height: 5px;
	background-color: black;
	border-radius: 100%;
	content: '';
}
</style>
