import { IForm } from '@/base-ui/form/index';
export const searchFormConfig: IForm = {
	labelWidth: '100px',
	itemStyle: {
		padding: '5px 20px'
	},
	formItems: [
		{ field: 'id', type: 'input', label: 'id', placeholder: '请输入id' },
		{
			field: 'name',
			type: 'input',
			label: '部门名称',
			placeholder: '请输入部门名称'
		},
		{
			field: 'leader',
			type: 'input',
			label: '领导',
			placeholder: '请输入领导名字'
		},

		{
			field: 'createAt',
			type: 'datepicker',
			label: '创建时间',
			otherOptions: {
				startPlaceholder: '开始时间',
				endPlaceholder: '结束时间',
				type: 'daterange'
			}
		}
	]
};
