<template>
	<div class="user">
		<hy-form v-bind="searchFormConfig"></hy-form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import hyForm from "@/base-ui/form/index";
import { searchFormConfig } from "./config/searchForm-config";
export default defineComponent({
	name: "user",
	components: {
		hyForm
	},
	setup() {
		return { searchFormConfig };
	}
});
</script>

<style scoped></style>
