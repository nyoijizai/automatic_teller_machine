<template>
	<tzu-card-document :data="educationData">
		<h1 class="title">学籍证明</h1>
		<div class="content">
			<p>
				学生
				<ins>{{ educationData.name ? educationData.name : '暂无信息' }}</ins>
				（学号
				<ins>
					{{
						educationData.studentNumber
							? educationData.studentNumber
							: '暂无信息'
					}}
				</ins>
				），性别
				<ins>{{ educationData.sex ? educationData.sex : '暂无信息' }}</ins>
				，籍贯
				<ins>
					{{
						educationData.nativePlace ? educationData.nativePlace : '暂无信息'
					}}
				</ins>
				，身份证号码
				<ins>
					{{ educationData.cardId ? educationData.cardId : '暂无信息' }}
				</ins>
				。
				<ins>
					{{
						educationData.forecastTime ? educationData.forecastTime : '暂无信息'
					}}
				</ins>
				年 9 月起就读于泰州学院
				<ins>
					{{
						educationData.departmentName
							? educationData.departmentName
							: '暂无信息'
					}}
				</ins>
				学院
				<ins>
					{{ educationData.majorName ? educationData.majorName : '暂无信息' }}
				</ins>
				专业，学制
				<ins>
					{{ educationData.yearsStudy ? educationData.yearsStudy : '暂无信息' }}
				</ins>
				年，层次
				<ins>
					{{
						educationData.trainingLevel
							? educationData.trainingLevel
							: '暂无信息'
					}}
				</ins>
				。
			</p>
			<p>特此证明。</p>
		</div>
	</tzu-card-document>
</template>

<script>
// 必需
import { IdentifyEducation } from '@/api/certificate';

export default {
	components: {
		tzuCardDocument: () => import('@/components/template/Document'),
	},
	created() {
		// 获取数据
		this.getData();
	},
	data() {
		return {
			educationData: {},
		};
	},
	methods: {
		// 初始化数据
		getData() {
			// 获取学籍信息
			IdentifyEducation().then((res) => {
				this.educationData = res;
			});
		},
	},
};
</script>

<style lang="less" scoped>
@spacer: 1rem;
#colors() {
	white: #fff;
	gray-200: #333;
}
#containers() {
	lg: 960px;
}

.education {
	display: flex;
	width: #containers[lg];
	flex-flow: column nowrap;
	padding: @spacer*3.25 @spacer*6.25;

	.tzu-card {
		&-body {
			padding: @spacer * 3;
			height: #containers[lg] * 0.5;

			&,
			.title {
				background-color: #colors[white];
				color: #colors[gray-200] !important;
			}

			.title {
				text-align: center;
				font-size: @spacer*1.5;
				margin-bottom: @spacer * 3;
			}

			.content {
				text-indent: 2em;
			}

			.unit {
				text-align: right;
			}
		}
	}
}
</style>
