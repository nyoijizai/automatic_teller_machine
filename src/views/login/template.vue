<template>
	<div class="login tzu-card">
		<template v-if="activeMode.mode !== 'AP'">
			<a-avatar
				:size="140"
				shape="square"
				:src="require(`@/assets/img/icon/${activeMode.icon}@2x.png`)"
			/>
			<span class="item-label">{{ activeMode.label }}</span>
		</template>
	</div>
</template>

<script>
// 必需
import { IdentifyAP, IdentifyID, IdentifyIC, IdentifyQR } from '@/api/login';

export default {
	beforeCreate() {
		const mode = this.$route.query.mode;

		switch (mode) {
			case 'ID':
				const data = new FormData();
				data.append('idCardNo', '360105200205250528');

				IdentifyID(data).then((res) => {
					this.$router.push({ name: 'Home' });
					localStorage.setItem('Token', res.token);
					localStorage.setItem('User', JSON.stringify(res.user));
					this.$message.success(`欢饮回来，${res.user.userFullName}`);
				});
				break;
			case 'IC':
				console.log(2);
				break;
		}
	},
	created() {
		this.menuConfig.map((arg) => {
			if (this.$route.query.mode === arg.mode) {
				return (this.activeMode = arg);
			}
		});
	},
	data() {
		return {
			activeMode: {},
			menuConfig: [
				{
					mode: 'ID',
					label: '请将证件放置在身份证扫描区',
					icon: 'icon_login_verify_card',
				},
				{
					mode: 'IC',
					label: '请将校园卡放置在左侧读卡器',
					icon: 'icon_login_verify_card',
				},
				{
					mode: 'AP',
					label: '账号密码登录',
					icon: 'icon_login_password',
				},
				{
					mode: 'QR',
					label: '请使用微信扫描上方二维码登录',
					icon: 'icon_login_verify_qrCode',
				},
			],
		};
	},
};
</script>

<style lang="less" scoped>
@spacer: 1rem;
#containers() {
	lg: 854px;
}

.login {
	display: flex;
	align-items: center;
	width: #containers[lg];
	justify-content: center;
	flex-flow: column nowrap;
	height: #containers[lg] * 0.5;

	.item-label {
		margin-top: @spacer * 3;
	}
}
</style>
