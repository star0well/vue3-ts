<template>
	<div class="hy-table">
		<div class="header">
			<slot name="header">
				<div class="title">{{ titie }}</div>
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
			>
				<el-table-column
					v-if="showSelectColumn"
					type="selection"
					align="center"
					width="60"
				></el-table-column>
				<el-table-column
					v-if="showIndexColumn"
					type="index"
					align="center"
					label="序号"
					width="80"
				></el-table-column>
				<template v-for="propItem in propList" :key="propItem.prop">
					<el-table-column v-bind="propItem" align="center">
						<template #default="scope">
							<slot :name="propItem.soltName" :row="scope.row">
								{{ scope.row[propItem.prop] }}</slot
							>
						</template></el-table-column
					>
				</template>
			</el-table>
		</div>

		<div class="footer">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage4"
				:page-sizes="[100, 200, 300, 400]"
				:page-size="100"
				layout="total, sizes, prev, pager, next, jumper"
				:total="400"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		titie: {
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
		showIndexColumn: {
			type: Boolean,
			default: false
		},
		showSelectColumn: {
			type: Boolean,
			default: false
		}
	},
	emits: ['selectionChange'],
	setup(props, { emit }) {
		const handleSelectionChange = (value: any) => {
			console.log(value);
			emit('selectionChange', value);
		};
		return { handleSelectionChange };
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
