<template>
	<div class="pageSearch">
		<page-search :searchFormConfig="searchFormConfig" />
	</div>
	<div class="pageContent">
		<page-content
			:contentTableConfig="contentTableConfig"
			pageName="users"
		></page-content>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
		// const userCount = computed(() => store.state.system.userCount);

		return {
			PageSearch,
			searchFormConfig,
			contentTableConfig
		};
	}
});
</script>

<style scoped></style>
