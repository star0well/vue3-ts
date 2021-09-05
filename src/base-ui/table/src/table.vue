<template>
	<div class="hy-table">
		<div class="header">
			<slot name="header">
				<div class="title">{{ title }}</div>
				<div class="handler">
					<slot name="headerHandler"></slot>
				</div>
			</slot>
		</div>
		<div class="content">
			<el-table
				:data="listData"
				border
				style="width: 100%"
				@selection-change="handleSelectionChange"
				v-bind="childrenProps"
			>
				<el-table-column
					v-if="showSelectColumn"
					type="selection"
					align="center"
					width="40"
				></el-table-column>
				<el-table-column
					v-if="showIndexColumn"
					type="index"
					align="center"
					label="序号"
					width="60"
				></el-table-column>
				<template v-for="propItem in propList" :key="propItem.prop">
					<el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
						<template #default="scope">
							<slot :name="propItem.slotName" :row="scope.row">
								{{ scope.row[propItem.prop] }}</slot
							>
						</template></el-table-column
					>
				</template>
			</el-table>
		</div>

		<div class="footer" v-if="showFooter">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="page.currentPage"
				:page-sizes="[5, 10, 15]"
				:page-size="page.pageSize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="dataCount"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		title: {
			type: String,
			default: ''
		},
		propList: {
			type: Array,
			required: true
		},
		listData: {
			type: Array,
			required: true
		},
		dataCount: {
			type: Number,
			default: 0
		},
		showIndexColumn: {
			type: Boolean,
			default: false
		},
		showSelectColumn: {
			type: Boolean,
			default: false
		},
		showFooter: {
			type: Boolean,
			default: true
		},
		page: {
			type: Object,
			default: () => ({ currentPage: 0, pageSize: 10 })
		},
		childrenProps: {
			type: Object,
			default: () => ({})
		}
	},
	emits: ['selectionChange', 'update:page'],
	setup(props, { emit }) {
		const handleSelectionChange = (value: any) => {
			console.log(value);
			emit('selectionChange', value);
		};
		const handleSizeChange = (pageSize: number) => {
			emit('update:page', { ...props.page, pageSize });
		};
		const handleCurrentChange = (currentPage: number) => {
			emit('update:page', { ...props.page, currentPage });
		};
		return { handleSelectionChange, handleSizeChange, handleCurrentChange };
	}
});
</script>

<style scoped lang="less">
.hy-table {
	padding: 20px;
	border-top: 20px solid hsl(260, 7%, 76%);
}
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 45px;
	padding: 0 5px;
}
.title {
	font-size: 20px;
	font-weight: 700;
}
.header {
	align-items: center;
}
.footer {
	margin-top: 15px;

	.el-pagination {
		text-align: right;
	}
}
</style>
