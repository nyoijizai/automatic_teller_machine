<template>
	<section class="home tzu-card">
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
				:to="{ name: item.pathName }"
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
					label: '成绩单查询打印',
					icon: 'icon_user_grade',
					pathName: 'Archive',
				},
				{
					label: '在读证明打印',
					icon: 'icon_user_postgraduate',
					pathName: 'EducationCertificate',
				},
				{
					label: '获奖证明打印',
					icon: 'icon_user_glory',
					pathName: 'honorCertificate',
				},
				{
					label: '图书借阅查询',
					icon: 'icon_user_library',
					pathName: 'Library',
				},
				{
					label: '一卡通查询',
					icon: 'icon_user_ecard2',
					pathName: 'Union',
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

.home {
	display: flex;
	width: #containers[lg];
	flex-flow: column nowrap;
	padding: @spacer*3.25 @spacer*6.25;

	.tzu-card {
		&-body {
			.grid-item {
				color: #colors[gray-200];
				background-color: #colors[white];
			}
		}
	}
}
</style>
