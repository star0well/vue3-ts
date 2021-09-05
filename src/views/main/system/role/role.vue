<template>
	<div class="role">
		<page-search :searchFormConfig="searchFormConfig"></page-search>
		<page-content
			:contentTableConfig="contentTableConfig"
			pageName="role"
			@newBtnClick="handleNewData"
			@editBtnClick="handleEditData"
		></page-content>
		<page-modal
			ref="pageModalRef"
			:modalConfig="modalConfig"
			pageName="role"
			:defaultInfo="defaultInfo"
			:otherInfo="otherInfo"
		>
			<div class="menu-tree">
				<el-tree
					ref="elTreeRef"
					:data="menus"
					show-checkbox
					node-key="id"
					:props="{ children: 'children', label: 'name' }"
					@check="handleCheckChange"
				>
				</el-tree>
			</div>
		</page-modal>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue';
import { useStore } from '@/store/main';
import { getMenuLeafKeys } from '@/utils/map-menus';

import PageContent from '@/components/page-content';
import PageSearch from '@/components/page-search';
import PageModal from '@/components/page-modal';

import { contentTableConfig } from './config/content-config';
import { searchFormConfig } from './config/searchForm-config';
import { modalConfig } from './config/modal-config';

import { usePageModal } from '@/hooks/usePageModal';
import { ElTree } from 'element-plus';
export default defineComponent({
	name: 'role',
	components: {
		PageContent,
		PageSearch,
		PageModal
	},
	setup() {
		const store = useStore();
		const menus = computed(() => store.state.entireMenu);
		const otherInfo = ref({});
		const elTreeRef = ref<InstanceType<typeof ElTree>>();
		//处理pageModal的hooks
		const editCallback = (item: any) => {
			const leafKeys = getMenuLeafKeys(item.menuList);
			nextTick(() => {
				console.log(elTreeRef.value);

				elTreeRef.value?.setCheckedKeys(leafKeys, false);
			});
		};
		const [pageModalRef, defaultInfo, handleEditData, handleNewData] = usePageModal(
			undefined,
			editCallback
		);
		const handleCheckChange = (data1: any, data2: any) => {
			const checkedKeys = data2.checkedKeys;
			const halfCheckedKeys = data2.halfCheckedKeys;
			const menuList = [...checkedKeys, ...halfCheckedKeys];
			console.log(menuList);

			otherInfo.value = { menuList };
		};
		return {
			PageContent,
			contentTableConfig,
			PageSearch,
			searchFormConfig,
			modalConfig,
			pageModalRef,
			defaultInfo,
			handleEditData,
			handleNewData,
			menus,
			handleCheckChange,
			otherInfo,
			elTreeRef
		};
	}
});
</script>

<style scoped lang="less">
.menu-tree {
	margin-left: 20px;
}
</style>
