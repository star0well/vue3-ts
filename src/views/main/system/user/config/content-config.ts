export const contentTableConfig = {
	titie: '用户列表',
	propList: [
		{ prop: 'name', label: '用户名', minWidth: '100' },
		{ prop: 'realname', label: '真实姓名', minWidth: '100' },
		{ prop: 'cellphone', label: '手机号', minWidth: '100' },
		{ prop: 'enable', label: '状态', minWidth: '100', soltName: 'status' },
		{
			prop: 'createAt',
			label: '创建时间',
			minWidth: '250',
			soltName: 'createAt'
		},
		{
			prop: 'updateAt',
			label: '更新时间',
			minWidth: '250',
			soltName: 'updateAt'
		},
		{
			soltName: 'handler',
			label: '操作',
			minWidth: '100'
		}
	],
	showIndexColumn: true,
	showSelectColumn: true
};
