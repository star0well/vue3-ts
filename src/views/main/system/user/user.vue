<template>
	<div class="user">
		<hy-form v-bind="searchFormConfig" v-model="formData"></hy-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import hyForm from "@/base-ui/form/index";
import { searchFormConfig } from "./config/searchForm-config";
export default defineComponent({
	name: "user",
	components: {
		hyForm
	},
	setup() {
		const formData = ref({
			id: "",
			name: "",
			password: "",
			sport: "",
			creatTime: ""
		});
		return { searchFormConfig, formData };
	}
});
</script>

<style scoped></style>
