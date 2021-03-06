type IFormType = 'input' | 'password' | 'select' | 'datepicker';
export interface IFormItem {
	field: string;
	type: IFormType;
	label: string;
	rules?: string;
	placeholder?: string | number;
	options?: any[];
	otherOptions?: any;
	isHidden?: boolean;
}
export interface IForm {
	formItems: IFormItem[];
	labelWidth?: string;
	itemStyle?: any;
	colLayout?: any;
}
