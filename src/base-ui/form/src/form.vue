<template>
	<div class="hy-form">
		<div class="header">
			<slot name="header"></slot>
		</div>

		<el-form :label-width="labelWidth">
			<el-row>
				<template v-for="item in formItems" :key="item.label">
					<el-col v-bind="colLayout">
						<el-form-item :label="item.label" :style="itemStyle">
							<template v-if="item.type === 'input' || item.type === 'password'"
								><el-input
									:placeholder="item.placeholder"
									:show-password="item.password === 'password'"
									:model-value="modelValue[`${item.field}`]"
									@update:modelValue="handleValueChange($event, item.field)"
								></el-input
							></template>
							<template v-else-if="item.type === 'select'"
								><el-select
									:placeholder="item.placeholder"
									style="width: 100%"
									:model-value="modelValue[`${item.field}`]"
									@update:modelValue="handleValueChange($event, item.field)"
								>
									<el-option
										v-for="option in item.options"
										:key="option.titel"
										:value="option.value"
										>{{ option.titel }}</el-option
									>
								</el-select></template
							>
							<template v-if="item.type === 'datepicker'">
								<el-date-picker
									v-bind="item.otherOptions"
									style="width: 100%"
									:model-value="modelValue[`${item.field}`]"
									@update:modelValue="handleValueChange($event, item.field)"
								></el-date-picker>
							</template>
						</el-form-item>
					</el-col>
				</template>
			</el-row>
		</el-form>
		<div class="footer">
			<slot name="footer"> </slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { IFormItem } from '../types/index';

export default defineComponent({
	props: {
		modelValue: {
			type: Object,
			required: true
		},
		formItems: {
			type: Array as PropType<IFormItem[]>,
			default: () => []
		},
		labelWidth: {
			type: String,
			default: '100px'
		},
		itemStyle: {
			type: Object,
			default: () => ({ padding: '20px 40px' })
		},
		colLayout: {
			type: Object,
			default: () => ({
				xl: 6, // >1920px 4个
				lg: 8,
				md: 12,
				sm: 24,
				xs: 24
			})
		}
	},
	//通过v-model语法糖双向绑定
	// emits: ['update:modelValue'],
	// setup(props, { emit }) {
	// 	const formData = ref({ ...props.modelValue });
	// 	watch(
	// 		formData,
	// 		(newValue) => {
	// 			console.log(newValue);
	// 			emit('update:modelValue', newValue);
	// 		},
	// 		{ deep: true }
	// 	);
	// 	return {
	// 		formData
	// 	};
	// }
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const handleValueChange = (value: any, field: string) => {
			emit('update:modelValue', { ...props.modelValue, [field]: value });
		};
		return { handleValueChange };
	}
});
</script>

<style scoped>
.hy-form {
	padding-top: 22px;
}
</style>
