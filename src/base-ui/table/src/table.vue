<template>
	<div class="hy-table">
		<el-table :data="listData" border style="width: 100%">
			<template v-for="propItem in propList" :key="propItem.prop">
				<el-table-column v-bind="propItem" align="center">
					<template #default="scope">
						<slot :name="propItem.soltName" :row="scope.row">
							{{ scope.row[propItem.prop] }}</slot
						>
					</template></el-table-column
				>
			</template>
		</el-table>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		propList: {
			type: Array,
			required: true
		},
		listData: {
			type: Array,
			required: true
		}
	},
	setup() {
		return {};
	}
});
</script>

<style scoped>
.content {
	padding: 20px;
	border-top: 20px solid hsl(260, 7%, 76%);
}
</style>
