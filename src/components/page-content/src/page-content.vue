<template>
	<div class="content">
		<hy-table :listData="dataList" v-bind="contentTableConfig">
			<template #headerHandler>
				<el-button type="primary" size="medium">新建用户</el-button>
			</template>
			<template #status="scope"
				><el-button
					:type="scope.row.enable ? 'success' : 'danger'"
					plain
					size="mini"
					>{{ scope.row.enable ? '启用' : '禁用' }}</el-button
				>
			</template>
			<template #createAt="scope">
				{{ $filters.formatTime(scope.row.createAt) }}
			</template>
			<template #updateAt="scope">
				{{ $filters.formatTime(scope.row.updateAt) }}
			</template>
			<template #handler>
				<div class="handle-btn">
					<el-button icon="el-icon-edit" size="mini" type="text"
						>编辑</el-button
					>
					<el-button icon="el-icon-delete" size="mini" type="text"
						>删除</el-button
					>
				</div>
			</template>
		</hy-table>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store/main/index';
import HyTable from '@/base-ui/table';

export default defineComponent({
	components: {
		HyTable
	},
	props: {
		contentTableConfig: {
			type: Object,
			require: true
		},
		pageName: {
			type: String,
			require: true
		}
	},
	setup(props) {
		const store = useStore();

		//发送网络请求

		const getPageData = (query: any = {}) => {
			store.dispatch('system/getPageListAction', {
				pageName: props.pageName,
				queryInfo: {
					offset: 0,
					size: 10,
					...query
				}
			});
		};
		getPageData();

		const dataList = computed(() =>
			store.getters[`system/pageListData`](props.pageName)
		);
		return { HyTable, dataList, getPageData };
	}
});
</script>

<style scoped></style>
