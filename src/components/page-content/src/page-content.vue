<template>
	<div class="content">
		<hy-table
			:listData="dataList"
			v-bind="contentTableConfig"
			:dataCount="dataCount"
			v-model:page="pageInfo"
		>
			<template #headerHandler>
				<el-button v-if="isCreate" type="primary" size="medium" @click="handleNewClick"
					>新建</el-button
				>
			</template>
			<template #status="scope"
				><el-button :type="scope.row.enable ? 'success' : 'danger'" plain size="mini">{{
					scope.row.enable ? '启用' : '禁用'
				}}</el-button>
			</template>

			<template #createAt="scope">
				{{ $filters.formatTime(scope.row.updateAt) }}
			</template>
			<template #updateAt="scope">
				{{ $filters.formatTime(scope.row.updateAt) }}
			</template>

			<template #handler="scope">
				<div class="handle-btn">
					<el-button
						icon="el-icon-edit"
						size="mini"
						type="text"
						v-if="isUpdate"
						@click="handleEditClick(scope.row)"
						>编辑</el-button
					>
					<el-button
						icon="el-icon-delete"
						size="mini"
						type="text"
						v-if="isDelete"
						@click="handleDleteClick(scope.row)"
					>
						删除</el-button
					>
				</div>
			</template>

			<template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
				<template v-if="item.slotName">
					<slot :name="item.slotName" :row="scope.row"></slot>
				</template>
			</template>
		</hy-table>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import { useStore } from '@/store/main/index';
import HyTable from '@/base-ui/table';
import { usePermission } from '@/hooks/usePermission';
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
	emits: ['newBtnClick', 'editBtnClick'],
	setup(props: any, { emit }) {
		const store = useStore();
		//双向绑定pageInfo
		const pageInfo = ref({ currentPage: 1, pageSize: 10 });

		watch(pageInfo, () => getPageData());
		//获取权限
		const isCreate = usePermission(props.pageName, 'create');
		const isUpdate = usePermission(props.pageName, 'update');
		const isDelete = usePermission(props.pageName, 'delete');
		const isQuery = usePermission(props.pageName, 'query');

		//发送网络请求

		const getPageData = (query: any = {}) => {
			if (!isQuery) return;
			store.dispatch('system/getPageListAction', {
				pageName: props.pageName,
				queryInfo: {
					offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
					size: pageInfo.value.pageSize,
					...query
				}
			});
		};
		getPageData();

		const dataList = computed(() => store.getters[`system/pageListData`](props.pageName));
		const dataCount = computed(() => {
			return store.getters[`system/pageCountData`](props.pageName);
		});

		//获取其他的动态插槽
		const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
			if (item.slotName === 'status') return false;
			if (item.slotName === 'createAt') return false;
			if (item.slotName === 'updateAt') return false;
			if (item.slotName === 'handler') return false;
			return true;
		});
		//删除、编辑、新建按键
		const handleDleteClick = (item: any) => {
			console.log(item);
			store.dispatch('system/deletePageDataAction', {
				pageName: props.pageName,
				id: item.id
			});
		};
		const handleNewClick = () => {
			emit('newBtnClick');
		};
		const handleEditClick = (item: any) => {
			emit('editBtnClick', item);
		};

		return {
			HyTable,
			dataList,
			getPageData,
			dataCount,
			pageInfo,
			otherPropSlots,
			isCreate,
			isUpdate,
			isQuery,
			isDelete,
			handleDleteClick,
			handleNewClick,
			handleEditClick
		};
	}
});
</script>

<style scoped></style>
