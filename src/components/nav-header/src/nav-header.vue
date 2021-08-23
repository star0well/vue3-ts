<template>
	<div class="nav-header">
		<i
			class="fold-menu"
			:class="!isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
			@click="handleFoldClick"
		></i>
		<div class="content">
			<hy-breadcrumn :breadcrumbs="breadcrumbs" />
			<user-info />
		</div>
	</div>
	npm
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import userInfo from './user-info.vue';
import HyBreadcrumn from '@/base-ui/breadcrumb';
import { pathMapBreadcrumb } from '@/utils/map-menus';
import { useStore } from '@/store/main/index';
import { useRoute } from 'vue-router';

export default defineComponent({
	emits: ['foldChange'],
	components: {
		userInfo,
		HyBreadcrumn
	},
	setup(prop, { emit }) {
		const isFold = ref(false);
		const handleFoldClick = () => {
			isFold.value = !isFold.value;
			emit('foldChange', isFold.value);
		};
		//Breadcroumb
		const store = useStore();
		const route = useRoute();

		const breadcrumbs = computed(() => {
			const userMenus = store.state.login.userMenus;
			const currentPath = route.path;
			return pathMapBreadcrumb(userMenus, currentPath);
		});

		return {
			handleFoldClick,
			isFold,
			breadcrumbs
		};
	}
});
</script>

<style scoped lang="less">
.nav-header {
	display: flex;
	width: 100%;

	.fold-menu {
		font-size: 30px;
		cursor: pointer;
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 1;
		padding: 0 20px;
	}
}
</style>
