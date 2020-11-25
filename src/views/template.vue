<template>
	<section class="print">
		<!-- 标题 -->
		<h1 class="title">泰州学院学生成绩档案表</h1>
		<!-- 副标题 -->
		<h3 class="subtitle">入学以来</h3>
		<!-- 个人信息 开始 -->
		<a-descriptions bordered size="small" :column="24">
			<a-descriptions-item label="院（系）/部" :span="6">
				计算机科学与技术学院
			</a-descriptions-item>
			<a-descriptions-item label="培养层次" :span="3">
				本科
			</a-descriptions-item>
			<a-descriptions-item label="学制" :span="3">
				4 年
			</a-descriptions-item>
			<a-descriptions-item label="入学时间" :span="6">
				2017 年 9 月
			</a-descriptions-item>
			<a-descriptions-item label="学号" :span="6">
				201479856
			</a-descriptions-item>
			<a-descriptions-item label="专业" :span="6">
				计算机科学与技术（苏软嵌入）
			</a-descriptions-item>
			<a-descriptions-item label="行政班级" :span="6">
				17 计科（嵌入）2 班
			</a-descriptions-item>
			<a-descriptions-item label="毕业时间" :span="6">
				2021 年 6 月
			</a-descriptions-item>
			<a-descriptions-item label="姓名" :span="6">
				郑建国
			</a-descriptions-item>
		</a-descriptions>
		<!-- 个人信息 结束 -->
	</section>
</template>

<style lang="less">
@spacer: 1rem;

.print {
	flex: 1;
	text-align: center;
	background-color: #fff;
}

.subtitle {
	font-size: @spacer;
}

.ant-descriptions {
	&-item {
		&-label {
			text-align-last: justify;
		}
		&-content {
			text-align: left;
		}
	}
}
</style>
