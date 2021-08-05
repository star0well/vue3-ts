<template>
	<div class="loginPhone">
		<el-form label-width="60px">
			<el-form-item label="手机号">
				<el-input v-model="phone.number"></el-input>
			</el-form-item>

			<el-form-item label="验证码">
				<div class="get-code">
					<el-input v-model="phone.code"></el-input>
					<el-button class="get-butn" type="primary">获取验证码</el-button>
				</div>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
	setup() {
		const phone = reactive({
			numer: "",
			code: ""
		});

		return {
			phone
		};
	}
});
</script>

<style scoped>
.get-code {
	display: flex;
}
.get-butn {
	margin-left: 8px;
}
</style>
