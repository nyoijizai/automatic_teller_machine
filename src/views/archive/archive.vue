<template>
	<section class="archive tzu-card">
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
		<div class="tzu-card-body tzu-grid tzu-grid-3">
			<router-link
				:key="index"
				class="grid-item tzu-card"
				v-for="(item, index) in menuConfig"
				:to="{
					name: 'ArchiveTemplate',
					query: { mode: item.mode, studentNumber: userData.userCode },
				}"
			>
				<div class="grid-item-wrap">
					<a-avatar
						:size="60"
						shape="square"
						:src="require(`@/assets/img/icon/${item.icon}@2x.png`)"
					/>
					<span class="item-label">{{ item.label }}</span>
				</div>
			</router-link>
		</div>
	</section>
</template>

<script>
export default {
	created() {
		const user = JSON.parse(localStorage.getItem('User'));
		this.userData = user;
	},
	data() {
		return {
			userData: {},
			menuConfig: [
				{
					mode: 'archive',
					label: '成绩档案表',
					icon: 'icon_report_file',
				},
				{
					mode: 'original',
					label: '成绩单(原始)',
					icon: 'icon_report_original',
				},
				{
					mode: 'valid',
					label: '成绩单(有效)',
					icon: 'icon_report_effective',
				},
			],
		};
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

.archive {
	display: flex;
	width: #containers[lg];
	flex-flow: column nowrap;
	padding: @spacer*3.25 @spacer*6.25;

	.tzu-card {
		&-body {
			&.tzu-grid {
				grid-template-rows: repeat(2, 1fr);
			}

			.grid-item {
				color: #colors[gray-200];
				background-color: #colors[white];
			}
		}
	}
}
</style>
