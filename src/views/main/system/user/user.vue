<template>
	<div class="pageSearch">
		<page-search
			:searchFormConfig="searchFormConfig"
			@resetBtnClick="handleResetClick"
			@queryBtnClick="handleQueryClick"
		/>
	</div>
	<div class="pageContent">
		<page-content
			:contentTableConfig="contentTableConfig"
			pageName="users"
			ref="pageContentRef"
			@newBtnClick="handleNewData"
			@editBtnClick="handleEditData"
		></page-content>
	</div>
	<page-modal
		ref="pageModalRef"
		:modalConfig="modaleConfigRef"
		pageName="users"
		:defaultInfo="defaultInfo"
	></page-modal>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store/main';

import PageSearch from '@/components/page-search/index';
import PageContent from '@/components/page-content/index';
import PageModal from '@/components/page-modal';
import { searchFormConfig } from '@/views/main/system/user/config/searchForm-config';
import { contentTableConfig } from './config/content-config';
import { usePageSearch } from '@/hooks/usePageSearch';
import { usePageModal } from '@/hooks/usePageModal';
import { modalConfig } from './config/modal-config';

export default defineComponent({
	name: 'user',
	components: {
		PageSearch,
		PageContent,
		PageModal
	},
	setup() {
		const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch();
		//动态绑定配置文件

		//密码隐藏pageModal逻辑
		const newCallback = () => {
			const passwordItem = modalConfig.formItems.find((item) => item.field === 'password');
			passwordItem!.isHidden = false;
			console.log(passwordItem?.isHidden);
		};
		const editCallback = () => {
			const passwordItem = modalConfig.formItems.find((item) => item.field === 'password');
			passwordItem!.isHidden = true;
			console.log(passwordItem?.isHidden);
		};

		//动态获得部门和角色列表
		const store = useStore();
		const modaleConfigRef = computed(() => {
			const departmentItem = modalConfig.formItems.find((item) => {
				return item.field === 'departmentId';
			});
			departmentItem!.options = store.state.entireDepartment.map((item) => {
				console.log({ title: item.name, value: item.id });

				return { title: item.name, value: item.id };
			});
			const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId');
			roleItem!.options = store.state.entireRole.map((item) => {
				return { title: item.name, value: item.id };
			});

			return modalConfig;
		});
		const [pageModalRef, defaultInfo, handleEditData, handleNewData] = usePageModal(
			newCallback,
			editCallback
		);

		return {
			searchFormConfig,
			contentTableConfig,
			handleResetClick,
			handleQueryClick,
			PageContent,
			pageContentRef,
			pageModalRef,
			modaleConfigRef,
			handleNewData,
			handleEditData,
			defaultInfo
		};
	}
});
</script>

<style scoped></style>
