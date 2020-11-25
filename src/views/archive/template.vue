<template>
	<tzu-card-table>
		<a-table
			bordered
			:scroll="{ x: 1200, y: 615 }"
			:columns="tableConfig"
			:data-source="tableData"
			rowKey="schoolYearSemester"
		/>
	</tzu-card-table>
</template>

<script>
// 必需
import { queryReportCard, queryReportArchive } from '@/api/archive';

const archiveTableConfig = [
	{
		title: '课程/环节',
		dataIndex: 'courseLink',
	},
	{
		title: '类别',
		dataIndex: 'category',
	},
	{
		title: '学分',
		dataIndex: 'credit',
	},
	{
		title: '成绩',
		dataIndex: 'grade',
	},
	{
		title: '学分绩点',
		dataIndex: 'creditPoint',
	},
];
const reportTableConfig = [
	{
		width: 230,
		align: 'center',
		title: '学年学期',
		dataIndex: 'schoolYearSemester',
	},
	{
		width: 360,
		align: 'left',
		fixed: 'left',
		title: '课程/环节',
		dataIndex: 'courseLink',
	},
	{
		width: 200,
		title: '类别',
		align: 'center',
		dataIndex: 'category',
	},
	{
		width: 80,
		title: '学分',
		align: 'right',
		dataIndex: 'courseCredit',
	},
	{
		width: 80,
		align: 'center',
		title: '考核方式',
		dataIndex: 'evaluationMethod',
	},
	{
		width: 80,
		align: 'center',
		title: '修读性质',
		dataIndex: 'courseCharacter',
	},
	{
		width: 80,
		align: 'right',
		title: '平时成绩',
		dataIndex: 'peacetimeGrade',
	},
	{
		width: 80,
		align: 'right',
		title: '中考成绩',
		dataIndex: 'middleGrade',
	},
	{
		width: 80,
		align: 'right',
		title: '末考成绩',
		dataIndex: 'finalGrade',
	},
	{
		title: '技能',
		dataIndex: 'skill',
		children: [
			{ title: '类别', width: 80, align: 'right', dataIndex: 'skillCategory' },
			{ title: '成绩', width: 80, align: 'right', dataIndex: 'skillGrade' },
		],
	},
	{
		width: 80,
		align: 'right',
		title: '综合成绩',
		dataIndex: 'synthesizeGrade',
	},
	{
		width: 80,
		title: '辅修标记',
		dataIndex: 'minorSign',
	},
	{
		width: 80,
		title: '备注',
		dataIndex: 'remark',
	},
];

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
			tableConfig: reportTableConfig,
		};
	},
	methods: {
		// 初始化数据
		getData() {
			// 获取成绩单

			const mode = this.$route.query.mode;
			const studentNumber = this.$route.query.studentNumber;

			switch (mode) {
				case 'archive':
					this.tableConfig = archiveTableConfig;
					queryReportArchive(studentNumber).then((res) => {
						console.log(res);
						this.tableData = res.studentScoreArchives;
					});
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
