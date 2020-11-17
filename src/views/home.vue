<template>
	<section class="card bg-blur container-lg">
		<div class="card-header">
			<img class="card-img-badge" src="@/assets/img/user_avatar@2x.png" />
			<div class="card-nyoi">
				<p class="card-title">
					<span>{{ archivalData[8].value }}</span>
					<span class="card-jizai">201402567</span>
				</p>
				<p class="card-subtitle">
					<span class="card-jizai">计算机学院</span>
					<span class="card-jizai">大数据专业</span>
					<span class="card-jizai">数据 1 班</span>
				</p>
			</div>
			<el-button type="primary">打印</el-button>
		</div>
		<div class="card-body">
			<div class="card text-body">
				<h2 class="title text-center">泰州学院学生成绩档案表</h2>
				<el-row>
					<el-col :span="6" v-for="item in archivalData">
						<span class="archival-label">{{ item.label }}</span>
						<span class="archival-text">{{ item.value }}</span>
					</el-col>
				</el-row>
				<table>
					<tr v-for="item in archivalData">
						<th>{{ item.label }}</th>
						<td>{{ item.value }}</td>
					</tr>
				</table>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			archivalData: [
				{
					label: '院（系）/部',
					value: '计算机科学与技术学院',
				},
				{
					label: '培养层次',
					value: '本科',
				},
				{
					label: '学制',
					value: '4 年',
				},
				{
					label: '入学时间',
					value: '2017 年 9 月',
				},
				{
					label: '学号',
					value: '498 452 846',
				},
				{
					label: '专业',
					value: '计算机科学与技术（苏软嵌入）',
				},
				{
					label: '行政班级',
					value: '17 计科（嵌入）2 班',
				},
				{
					label: '毕业时间',
					value: '2021 年 6 月',
				},
				{
					label: '姓名',
					value: '郑建国',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped></style>
