<template>
	<div class="login tzu-grid tzu-grid-2">
		<div class="grid-item tzu-card" v-for="(item, index) in menuConfig">
			<div class="grid-item-wrap">
				<a-avatar
					:size="76"
					shape="square"
					:src="require(`@/assets/img/icon/${item.icon}@2x.png`)"
				/>
				<span class="item-label">{{ item.label }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menuConfig: [
				{
					mode: 'ID',
					label: '身份证登录',
					icon: 'icon_login_idcard',
				},
				{
					mode: 'IC',
					label: '校园卡登录',
					icon: 'icon_login_ecard',
				},
				{
					mode: 'AP',
					label: '账号密码登录',
					icon: 'icon_login_password',
				},
				{
					mode: 'QR',
					label: '微信二维码登录',
					icon: 'icon_login_qrcode',
				},
			],
		};
	},
};
</script>

<style lang="less" scoped>
#containers() {
	md: 540px;
}

.login {
	width: #containers[md];
}
</style>
