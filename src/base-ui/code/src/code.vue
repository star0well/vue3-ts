<template>
	<div class="yc-code">
		<pre>
      <code v-html="code"></code>
    </pre>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		code: {
			type: String,
			default: 'html'
		}
	},
	setup() {
		return {};
	}
});
</script>

<style scoped></style>
