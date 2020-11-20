<template>
	<section class="wrapper tzu-card">
		<div class="tzu-card-header">
			<a-avatar
				:size="67"
				:src="
					userData.icon
						? userData.icon
						: require(`@/assets/img/user_avatar@2x.png`)
				"
			/>
			<div class="meta">
				<div class="meta-item">
					<span class="title">{{ userData.userFullName }}</span>
					<span>{{ userData.userCode }}</span>
				</div>
				<div class="meta-item">
					<span v-if="userData.unitName">{{ userData.unitName }}</span>
					<span v-if="userData.majorName">{{ userData.majorName }}</span>
					<span v-if="userData.teamsName">{{ userData.teamsName }}</span>
				</div>
			</div>
			<div class="action">
				<a-button
					block
					size="large"
					shape="round"
					type="danger"
					@click="handlePrint"
				>
					打印
				</a-button>
			</div>
		</div>
		<div class="tzu-card-body">
			<slot />
			<div class="unit">
				<p>泰州学院教务处</p>
				<p>{{ documentData.date ? documentData.date : '暂无信息' }}</p>
			</div>
		</div>
	</section>
</template>

<script>
// 必需
import moment from 'moment';

export default {
	name: 'tzuCardDocument',
	props: {
		data: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
	created() {
		// 获取数据
		this.getData();
	},
	data() {
		return {
			userData: {},
			documentData: this.data,
		};
	},
	methods: {
		// 初始化数据
		getData() {
			const user = JSON.parse(localStorage.getItem('User'));

			this.userData = user;
			this.documentData.date = moment().format('YYYY 年 MM 月 DD 日');
		},
		// 打印
		handlePrint() {
			this.$message.error('暂时无法打印');
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

.wrapper {
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
				word-break: break-all;
			}

			.unit {
				text-align: right;
			}
		}
	}
}
</style>
