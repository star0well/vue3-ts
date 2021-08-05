export const rules = {
	name: [
		{
			required: true,
			message: "用户名必传",
			trigger: "blur"
		},
		{
			pattern: /^[a-z0-9]{5,10}$/,
			message: "用户名必须5-10个字母",
			trigger: "blur"
		}
	],
	password: [
		{
			required: true,
			message: "密码必传",
			trigger: "blur"
		},
		{
			pattern: /^[a-z0-9]{3,}$/,
			message: "用户名必须3位字母以上",
			trigger: "blur"
		}
	]
};
