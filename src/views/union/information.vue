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
		</div>
		<div class="tzu-card-body">
			<a-skeleton active :loading="loading">
				<a-descriptions :column="1">
					<a-descriptions-item label="学工号">
						{{ unionData.stuEmpNo }}
					</a-descriptions-item>
					<a-descriptions-item label="卡号">
						{{ unionData.cardNo }}
					</a-descriptions-item>
					<a-descriptions-item label="卡类型">
						{{ unionData.cardType }}
					</a-descriptions-item>
					<a-descriptions-item label="用户类型">
						{{ unionData.custType }}
					</a-descriptions-item>
				</a-descriptions>
				<a-divider />
				<a-descriptions :column="1">
					<a-descriptions-item label="卡状态">
						{{ unionData.status }}
					</a-descriptions-item>
					<a-descriptions-item label="账户余额">
						{{ unionData.balance }}元
					</a-descriptions-item>
				</a-descriptions>
			</a-skeleton>
		</div>
	</section>
</template>

<script>
// 必需
import { queryUnion } from '@/api/union';

export default {
	created() {
		// 获取数据
		this.getData();
	},
	data() {
		return {
			userData: {},
			unionData: {},
			loading: false,
			unionType: {
				1: '正式卡',
				2: '临时卡',
				3: '消费卡',
				4: '教职工',
				5: '学生',
				6: 'M1卡',
				99: '虚拟卡',
			},
			unionStatus: {
				// 卡状态:1-正常2-注销3-坏卡4-锁卡5-冻结6-挂失
				1: '正常',
				2: '注销',
				3: '怀卡',
				4: '锁卡',
				5: '冻结',
				6: '挂失',
			},
			identityType: {
				1: '教职工',
				2: '本科生',
				3: '专升本',
				4: '专科生',
				5: '自考生',
			},
		};
	},
	methods: {
		// 初始化数据
		getData() {
			const user = JSON.parse(localStorage.getItem('User'));

			this.loading = true;
			this.userData = user;
			// 获取一卡通信息
			queryUnion().then((res) => {
				this.loading = false;
				this.unionData = res;
				this.unionData.status = this.unionStatus[res.status];
				this.unionData.cardType = this.unionType[res.cardType];
				this.unionData.custType = this.identityType[res.custType];
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
			}

			.unit {
				text-align: right;
			}
		}
	}
}
</style>
