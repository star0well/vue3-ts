<template>
	<div class="pageSearch">
		<page-search :searchFormConfig="searchFormConfig" />
	</div>
	<div class="content">
		<hy-table :listData="userList" :propList="propList">
			<template #status="scope"
				><el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
			</template>
			<template #createAt="scope">
				<el-button>{{ scope.row.createAt }}</el-button>
			</template>
		</hy-table>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store/main/index';
import PageSearch from '@/components/page-search/index';
import HyTable from '@/base-ui/table/index';
import { searchFormConfig } from '@/views/main/system/user/config/searchForm-config';

export default defineComponent({
	name: 'user',
	components: {
		PageSearch,
		HyTable
	},
	setup() {
		const store = useStore();
		store.dispatch('system/getPageListAction', {
			url: '/users/list',
			queryInfo: {
				offset: 0,
				size: 10
			}
		});
		const userList = computed(() => store.state.system.userList);
		const userCount = computed(() => store.state.system.userCount);
		const propList = [
			{ prop: 'name', label: '用户名', minWidth: '100' },
			{ prop: 'realname', label: '真实姓名', minWidth: '100' },
			{ prop: 'cellphone', label: '手机号', minWidth: '100' },
			{ prop: 'enable', label: '状态', minWidth: '100', soltName: 'status' },
			{
				prop: 'createAt',
				label: '创建时间',
				minWidth: '250',
				soltName: 'createAt'
			},
			{
				prop: 'updateAt',
				label: '更新时间',
				minWidth: '250',
				soltName: 'updateAt'
			}
		];
		return {
			PageSearch,
			searchFormConfig,
			userList,
			userCount,
			propList,
			HyTable
		};
	}
});
</script>

<style scoped></style>
