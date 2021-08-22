import { IForm } from "@/base-ui/form/index";
export const searchFormConfig: IForm = {
	labelWidth: "100px",
	itemStyle: {
		padding: "5px 20px"
	},
	formItems: [
		{
			field: "name",
			type: "input",
			label: "用户名",
			placeholder: "请输入用户名"
		},
		{
			field: "password",
			type: "input",
			label: "密码"
		},
		{
			field: "sport",
			type: "select",
			label: "选择运动",
			placeholder: "请选择喜欢的运动",
			options: [
				{ titel: "篮球", value: "篮球" },
				{ titel: "游泳", value: "游泳" }
			]
		},
		{
			field: "creatTime",
			type: "datepicker",
			label: "创建时间",
			otherOptions: {
				startPlaceholder: "开始时间",
				endPlaceholder: "结束时间",
				type: "daterange"
			}
		}
	]
};
