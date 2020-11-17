<template>
	<section class="row-grid row-grid-2">
		<router-link class="card" :to="item.path" v-for="item in routeConfig">
			<img class="card-img" src="@/assets/img/login/ic_idcard.png" alt="" />
			<span class="card-title">{{ item.title }}</span>
		</router-link>
	</section>
</template>

<script>
export default {
	data() {
		return {
			routeConfig: [
				{
					path: '/login/template',
					icon: '/source/ic_idcard.png',
					title: '身份证登录',
				},
				{
					path: '/login/template',
					icon: 'ic_ecard',
					title: '校园卡登录',
				},
				{
					path: '/login/template',
					icon: 'ic_password',
					title: '账号密码登录',
				},
				{
					path: '/login/template',
					icon: 'ic_qrcode',
					title: '微信二维码登录',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.card {
	width: 258px;
	height: 258px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;

	&-img {
		margin-bottom: 26px;
	}
}
</style>
