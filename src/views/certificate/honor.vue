<template>
	<section class="honor tzu-card">
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
			<a-list item-layout="horizontal" :data-source="scholarshipData">
				<a-list-item slot="renderItem" slot-scope="item, index">
					<a-list-item-meta>
						<h3 slot="title" class="title font-size-lg">
							{{ item.levelName }}
						</h3>
						<div slot="description" class="description font-size-sm">
							<p>{{ item.level }}</p>
							<p>{{ item.yearName }}</p>
						</div>
					</a-list-item-meta>
					<a-button
						size="large"
						slot="actions"
						type="primary"
						@click="
							() => {
								$router.push({ name: 'Template', params: { data: item } });
							}
						"
					>
						查看详情
					</a-button>
				</a-list-item>
			</a-list>
		</div>
	</section>
</template>

<script>
// 必需
import { IdentifyScholarship } from '@/api/certificate';

export default {
	created() {
		// 获取数据
		this.getData();
	},
	data() {
		return {
			userData: {},
			scholarshipData: [],
			hierarchy: {
				1: '国家级',
				2: '省部级',
				3: '市厅级',
				4: '校级',
				5: '院级',
			},
		};
	},
	methods: {
		// 初始化数据
		getData() {
			const user = JSON.parse(localStorage.getItem('User'));
			this.userData = user;
			// 获取荣誉信息
			IdentifyScholarship().then((res) => {
				return;
				this.scholarshipData = res.studentAward.map((args) => {
					return {
						...args,
						level: this.hierarchy[args.level],
						yearName: args.yearName + '学年',
					};
				});
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
	gray-300: #666;
}
#containers() {
	lg: 960px;
}

.honor {
	display: flex;
	width: #containers[lg];
	flex-flow: column nowrap;
	padding: @spacer*3.25 @spacer*6.25;

	.tzu-card {
		&-body {
			padding: @spacer * 3;
			height: #containers[lg] * 0.5;
			background-color: #colors[white];
			color: #colors[gray-200] !important;

			.title {
				margin-bottom: @spacer * 0.25;
			}

			.description {
				p:last-child {
					color: #colors[gray-300] !important;
				}
			}
		}
	}
}
</style>
