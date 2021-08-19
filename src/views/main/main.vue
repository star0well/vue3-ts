<template>
	<div class="main">
		<el-container class="main-content">
			<el-aside :width="isCollapse ? '60px' : '210px'">
				<nav-menu :collapse="isCollapse" />
			</el-aside>
			<el-container class="page">
				<el-header class="page-header">
					<nav-header @foldChange="handleFoldChange" />
				</el-header>
				<el-main class="page-content">
					<div class="page-info"><router-view></router-view></div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavMenu from "@/components/nav-menu/index";
import NavHeader from "@/components/nav-header/index";

export default defineComponent({
	components: {
		NavMenu,
		NavHeader
	},
	setup() {
		const isCollapse = ref(false);
		const handleFoldChange = (isFold: boolean) => {
			isCollapse.value = isFold;
		};
		return {
			handleFoldChange,
			isCollapse
		};
	}
});
</script>

<style scoped lang="less">
.main {
	position: flex;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.main-content {
	.page-info {
		background-color: #fff;
	}
	height: 100%;
}
.el-aside {
	background-color: #001529;
	text-align: center;
}

.el-header {
	display: flex;
	height: 48px !important;
	align-items: center;
}
.el-main {
	color: #333;
	text-align: center;
	background-color: hsl(260, 7%, 76%);
}
.el-aside {
	overflow-x: hidden;
	overflow-y: auto;
	line-height: 200px;
	text-align: left;
	cursor: pointer;
	background-color: #001529;
	transition: width 0.3s linear;
	scrollbar-width: none; /* firefox */
	-ms-overflow-style: none; /* IE 10+ */

	&::-webkit-scrollbar {
		display: none;
	}
}
</style>
