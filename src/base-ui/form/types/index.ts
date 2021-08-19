type IFormType = "input" | "password" | "select" | "datepicker";
export interface IFormItem {
	type: IFormType;
	label: string;
	rules?: string;
	placeholder?: string | number;
	options?: any[];
	otherOptions?: any;
}
export interface IForm {
	formItems: IFormItem[];
	labelWidth?: string;
	itemStyle?: any;
	colLayout?: any;
}
