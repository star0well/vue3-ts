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
		></page-content>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import PageSearch from '@/components/page-search/index';
import PageContent from '@/components/page-content/index';
import { searchFormConfig } from '@/views/main/system/user/config/searchForm-config';
import { contentTableConfig } from './config/content-config';

export default defineComponent({
	name: 'user',
	components: {
		PageSearch,
		PageContent
	},
	setup() {
		const pageContentRef = ref<InstanceType<typeof PageContent>>();
		const handleResetClick = () => {
			pageContentRef.value?.getPageData();
		};
		const handleQueryClick = (query: any) => {
			pageContentRef.value?.getPageData(query);
		};
		return {
			searchFormConfig,
			contentTableConfig,
			handleResetClick,
			handleQueryClick,
			PageContent,
			pageContentRef
		};
	}
});
</script>

<style scoped></style>
