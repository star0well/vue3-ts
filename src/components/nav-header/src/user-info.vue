<template>
	<div class="user-info">
		<el-dropdown>
			<span class="el-dropdown-link">
				<el-avatar
					size="small"
					src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
				></el-avatar>
				<span>{{ name }}</span>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick"
						>退出登录</el-dropdown-item
					>
					<el-dropdown-item divided @click="handleUserInfo">用户信息</el-dropdown-item>
					<el-dropdown-item>系统管理</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store/main/index';
import localCache from '@/utils/cache';
import { useRouter } from 'vue-router';

export default defineComponent({
	setup() {
		const store = useStore();
		const router = useRouter();
		const name = computed(() => store.state.login.userInfo.name);
		const handleExitClick = () => {
			localCache.deleteCatche('token');
			router.push('/main');
		};
		const handleUserInfo = () => {
			router.push('/main/info');
		};
		return {
			name,
			handleExitClick,
			handleUserInfo
		};
	}
});
</script>

<style scoped>
.el-dropdown-link {
	cursor: pointer;
	display: flex;
	align-items: center;
}
</style>
