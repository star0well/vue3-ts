export const contentTableConfig = {
	title: '商品类别',
	propList: [
		{ prop: 'name', label: '类别', minWidth: '80' },

		{
			prop: 'createAt',
			label: '创建时间',
			minWidth: '250',
			slotName: 'createAt'
		},
		{
			prop: 'updateAt',
			label: '更新时间',
			minWidth: '250',
			slotName: 'updateAt'
		},
		{
			slotName: 'handler',
			label: '操作',
			minWidth: '100'
		}
	],
	showIndexColumn: true,
	showSelectColumn: true
};
