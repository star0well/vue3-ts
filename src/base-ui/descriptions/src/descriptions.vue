<template>
	<div class="descriptions">
		<el-descriptions :title="title" :column="column" border>
			<template v-for="(item, index) in tableDatas" :key="index">
				<el-descriptions-item>
					<template #label> {{ item.name }}</template>
					<el-tag>{{ item.description }}</el-tag>
				</el-descriptions-item>
			</template>
		</el-descriptions>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		title: {
			type: String,
			default: ''
		},
		column: {
			type: Number,
			default: 1
		},
		tableDatas: {
			type: Array,
			default: () => []
		}
	},
	setup() {
		return {};
	}
});
</script>

<style scoped></style>
