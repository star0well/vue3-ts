<template>
	<div class="page-modal">
		<el-dialog title="新建用户" v-model="dialogVisible" width="30%" center destroy-on-close>
			<hy-form v-bind="modalConfig" v-model="formData"></hy-form>
			<slot></slot>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="handleConfirmClick">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import HyForm from '@/base-ui/form/index';
import { useStore } from 'vuex';

export default defineComponent({
	props: {
		modalConfig: {
			type: Object,
			requier: true
		},
		defaultInfo: {
			type: Object,
			default: () => ({})
		},
		otherInfo: {
			type: Object,
			default: () => ({})
		},
		pageName: {
			type: String,
			requier: true
		}
	},
	components: {
		HyForm
	},
	setup(props) {
		const dialogVisible = ref(false);
		const formData = ref<any>({});
		watch(
			() => props.defaultInfo,
			(newValue: any) => {
				for (const item of props.modalConfig?.formItems) {
					formData.value[`${item.field}`] = newValue[`${item.field}`];
				}
			}
		);
		//确定按钮点击
		const store = useStore();
		const handleConfirmClick = () => {
			dialogVisible.value = false;
			if (Object.keys(props.defaultInfo).length) {
				store.dispatch('system/editPageDataAction', {
					pageName: props.pageName,
					editData: { ...formData.value, ...props.otherInfo },
					id: props.defaultInfo.id
				});
				console.log('编辑用户');
			} else {
				// 新建

				store.dispatch('system/createPageDataAction', {
					pageName: props.pageName,
					newData: { ...formData.value, ...props.otherInfo }
				});
				console.log('新建用户');
			}
		};
		return { formData, dialogVisible, handleConfirmClick };
	}
});
</script>

<style scoped></style>
