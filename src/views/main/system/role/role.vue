<template>
	<div class="role">
		<page-search :searchFormConfig="searchFormConfig"></page-search>
		<page-content
			:contentTableConfig="contentTableConfig"
			pageName="role"
		></page-content>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageContent from '@/components/page-content';
import PageSearch from '@/components/page-search';
import { contentTableConfig } from './config/content-config';
import { searchFormConfig } from './config/searchForm-config';
export default defineComponent({
	name: 'role',
	components: {
		PageContent,
		PageSearch
	},
	setup() {
		return { PageContent, contentTableConfig, PageSearch, searchFormConfig };
	}
});
</script>

<style scoped></style>
