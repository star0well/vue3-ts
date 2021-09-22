<template>
	<div class="chat">
		<el-input v-model="title" placeholder="请输入标题"></el-input>
		<hy-editor v-model:value="stringHtml"></hy-editor>
		<el-button type="primary" @click="handleBtn">提交</el-button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import HyEditor from '@/base-ui/editor';
import { createPageData } from '@/service/main/system/system';

export default defineComponent({
	name: 'chat',
	components: {
		HyEditor
	},
	setup() {
		const stringHtml = ref('yingcai');
		const title = ref();
		// const newData = { title: title.value, content: stringHtml.value };
		const handleBtn = () => {
			console.log(title.value);
			console.log(stringHtml.value);

			createPageData('/story', {
				title: title.value,
				content: stringHtml.value
			});
		};
		return { stringHtml, handleBtn, title };
	}
});
</script>

<style scoped></style>
