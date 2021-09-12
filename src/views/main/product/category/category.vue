<template>
	<div class="category">
		<page-content
			:contentTableConfig="contentTableConfig"
			pageName="category"
			@editBtnClick="handleEditData"
			@newBtnClick="handleNewData"
		></page-content>
		<page-modal
			ref="pageModalRef"
			:defaultInfo="defaultInfo"
			:modalConfig="modalConfig"
			pageName="category"
		></page-modal>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageContent from '@/components/page-content';
import PageModal from '@/components/page-modal';
import { contentTableConfig } from './config/content-config';
import { modalConfig } from './config/modal-config';
import { usePageModal } from '@/hooks/usePageModal';

export default defineComponent({
	name: 'category',
	components: {
		PageContent,
		PageModal
	},
	setup() {
		const [pageModalRef, defaultInfo, handleEditData, handleNewData] = usePageModal();
		return {
			contentTableConfig,
			pageModalRef,
			defaultInfo,
			handleEditData,
			handleNewData,
			modalConfig
		};
	}
});
</script>

<style scoped></style>
