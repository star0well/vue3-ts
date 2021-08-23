<template>
	<div class="loginPanel">
		<h2 class="title">后台管理系统</h2>
		<el-tabs type="border-card" stretch v-model="currentTab">
			<el-tab-pane name="account">
				<template #label>
					<span><i class="el-icon-user-solid"></i> 账号登录</span>
				</template>
				<login-account ref="accountRef"></login-account>
			</el-tab-pane>
			<el-tab-pane name="phone">
				<template #label>
					<span><i class="el-icon-mobile-phone"></i> 手机登录</span>
				</template>
				<login-phone ref="phoneRef"></login-phone>
			</el-tab-pane>
		</el-tabs>
		<div class="account-control">
			<el-checkbox v-model="isKeepPassword" @click="deletemess"
				>记住密码</el-checkbox
			>
			<el-link type="primary">忘记密码</el-link>
		</div>

		<el-button class="login-btn" type="primary" @click="handleloginClick"
			>立即登录</el-button
		>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import loginAccount from './login-account.vue';
import loginPhone from './login-phone.vue';
import localCache from '@/utils/cache';

export default defineComponent({
	components: {
		loginAccount,
		loginPhone
	},
	setup() {
		const currentTab = ref('account');
		const isKeepPassword = ref(false);
		const accountRef = ref<InstanceType<typeof loginAccount>>();
		const phoneRef = ref<InstanceType<typeof loginPhone>>();

		//方法调用

		const handleloginClick = () => {
			if (currentTab.value === 'account') {
				accountRef.value?.loginAction(isKeepPassword.value);
			} else {
				phoneRef.value;
			}
		};
		const deletemess = () => {
			if (isKeepPassword.value) {
				localCache.deleteCatche('name'), localCache.deleteCatche('password');
			}
		};
		return {
			isKeepPassword,
			accountRef,
			phoneRef,
			currentTab,
			handleloginClick,
			deletemess
		};
	}
});
</script>

<style scoped lang="less">
.loginPanel {
	width: 320px;
	margin-bottom: 120px;
}
.title {
	text-align: center;
}
.account-control {
	display: flex;
	justify-content: space-between;
}
.login-btn {
	width: 100%;
	margin-top: 10px;
}
</style>
