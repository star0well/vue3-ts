<template>
	<div class="page-search">
		<hy-form v-bind="searchFormConfig" v-model="formData">
			<template #header> <h1 class="header">高级搜索</h1></template>
			<template #footer>
				<div class="handle-btns">
					<el-button icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
					<el-button icon="el-icon-search" type="primary" @click="handleQuaryClick">搜索</el-button>
				</div>
			</template>
		</hy-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import hyForm from '@/base-ui/form/index';

export default defineComponent({
	props: {
		searchFormConfig: {
			type: Object,
			reuqired: true
		}
	},
	components: {
		hyForm
	},
	emits: ['resetBtnClick', 'queryBtnClick'],
	setup(props, { emit }) {
		//由配置文件决定format中的数据
		const formItems = props.searchFormConfig?.formItems ?? [];
		const formOriginData: any = {};
		for (const item of formItems) {
			formOriginData[item.field] = '';
		}
		const formData = ref(formOriginData);
		// 重置
		const handleResetClick = () => {
			formData.value = formOriginData;
			emit('resetBtnClick');
		};

		const handleQuaryClick = () => {
			console.log(formData.value);
			emit('queryBtnClick', formData.value);
		};
		return { formData, handleResetClick, handleQuaryClick };
	}
});
</script>

<style scoped>
.header {
	color: red;
}
.handle-btns {
	text-align: right;
	padding: 0 50px 20px 0;
}
</style>
