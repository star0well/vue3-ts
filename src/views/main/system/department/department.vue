<template>
	<div class="department">
		<page-search
			:searchFormConfig="searchFormConfig"
			pageName="department"
			@resetBtnClick="handleResetClick"
			@queryBtnClick="handleQueryClick"
		></page-search>
		<page-content
			:contentTableConfig="contentTableConfig"
			pageName="department"
			ref="pageContentRef"
			@editBtnClick="handleEditData"
			@newBtnClick="handleNewData"
		>
		</page-content>
		<page-modal
			ref="pageModalRef"
			:modalConfig="modalConfig"
			pageName="department"
			:defaultInfo="defaultInfo"
		>
		</page-modal>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModal from '@/components/page-modal';
import { usePageSearch } from '@/hooks/usePageSearch';
import { usePageModal } from '@/hooks/usePageModal';
import { searchFormConfig } from './config/search.config';
import { contentTableConfig } from './config/content.config';
import { modalConfig } from './config/modal-config';
export default defineComponent({
	name: 'department',

	components: {
		PageSearch,
		PageContent,
		PageModal
	},
	setup() {
		const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch();
		const [pageModalRef, defaultInfo, handleEditData, handleNewData] = usePageModal();

		return {
			searchFormConfig,
			contentTableConfig,
			modalConfig,
			pageContentRef,
			handleResetClick,
			handleQueryClick,
			pageModalRef,
			defaultInfo,
			handleEditData,
			handleNewData
		};
	}
});
</script>

<style scoped></style>
