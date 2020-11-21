<template>
	<tzu-card-table>
		<a-table
			bordered
			:scroll="{ y: 615 }"
			:columns="tableConfig"
			:data-source="tableData"
			rowKey="schoolYearSemester"
		/>
	</tzu-card-table>
</template>

<script>
// 必需
import { queryReportCard } from '@/api/archive';

export default {
	components: {
		tzuCardTable: () => import('@/components/template/Table'),
	},
	created() {
		console.log();
		// 获取数据
		this.getData();
	},
	data() {
		return {
			tableData: [],
			tableConfig: [
				{
					title: '学年学期',
					dataIndex: 'schoolYearSemester',
				},
				{
					title: '课程/环节',
					dataIndex: 'list.courseLink',
				},
				{
					title: '类别',
					dataIndex: 'list.category',
				},
				{
					title: '学分',
					dataIndex: 'list.courseCredit',
				},
				{
					title: '考核方式',
					dataIndex: 'list.evaluationMethod',
				},
				{
					title: '修读性质',
					dataIndex: 'list.courseCharacter',
				},
				{
					title: '平时成绩',
					dataIndex: 'list.peacetimeGrade',
				},
				{
					title: '中考成绩',
					dataIndex: 'list.middleGrade',
				},
				{
					title: '末考成绩',
					dataIndex: 'list.finalGrade',
				},
				{
					title: '综合成绩',
					dataIndex: 'list.synthesizeGrade',
				},
				{
					title: '技能',
					dataIndex: 'list.skill',
					children: [
						{ title: '类别', dataIndex: 'list.skillCategory' },
						{ title: '成绩', dataIndex: 'list.skillGrade' },
					],
				},
				{
					title: '辅修标记',
					dataIndex: 'list.minorSign',
				},
				{
					title: '备注',
					dataIndex: 'list.remark',
				},
			],
		};
	},
	methods: {
		// 初始化数据
		getData() {
			// 获取成绩单
			const mode = this.$route.query.mode;

			switch (mode) {
				case 'archive':
					break;
				case 'original':
					queryReportCard(1).then((res) => {
						console.log(res);
						res.map((arg) => {
							console.log(arg);
						});
					});
					break;
				case 'valid':
					queryReportCard(2).then((res) => {
						this.tableData = res;
					});
					break;
			}
		},
	},
};
</script>
