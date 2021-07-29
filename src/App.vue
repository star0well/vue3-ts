<template>
	<div>
		<h2>{{ $store.state.name }}</h2>
		<router-link to="/login">登录</router-link>
		<router-link to="/main">主页</router-link>
		<router-view></router-view>

		<el-button plain>朴素按钮</el-button>
		<el-button type="primary" plain>主要按钮</el-button>
		<el-button type="success" plain>成功按钮</el-button>
		<el-button type="info" plain>信息按钮</el-button>
		<el-button type="warning" plain>警告按钮</el-button>
		<el-button type="danger" plain>危险按钮</el-button>
		<el-input>输入框</el-input>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "App"
});
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
