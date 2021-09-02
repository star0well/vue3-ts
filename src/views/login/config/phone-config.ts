export const rules = {
	number: [
		{
			required: true,
			message: '请输入手机号',
			trigger: 'blur'
		},
		{
			pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
			message: '请输入正确的手机号',
			trigger: 'blur'
		}
	],
	code: [
		{
			required: true,
			message: '请输入验证码',
			trigger: 'blur'
		},
		{
			pattern: /^[a-z0-9]{6,}$/,
			message: '请输入正确的验证码',
			trigger: 'blur'
		}
	]
};
