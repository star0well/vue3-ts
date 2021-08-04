<template>
	<div class="loginPanel">
		<h2 class="title">后台管理系统</h2>
		<el-tabs type="border-card" stretch>
			<el-tab-pane>
				<template #label>
					<span><i class="el-icon-user-solid"></i> 账号登录</span>
				</template>
				<h3>账号登录</h3>
			</el-tab-pane>
			<el-tab-pane>
				<template #label>
					<span><i class="el-icon-mobile-phone"></i> 手机登录</span>
				</template>
				<h3>手机登录</h3>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		return {};
	}
});
</script>

<style scoped lang="less">
.loginPanel {
	width: 320px;
}
.title {
	text-align: center;
}
</style>
