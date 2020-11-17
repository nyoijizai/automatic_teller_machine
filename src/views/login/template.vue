<template>
	<section class="card card-shadow">
		<template v-if="modeState != 2">
			<img class="card-img" src="@/assets/img/login/ic_qrCode_scan.png" />
			<span class="card-title">{{ modeConfig[modeState].title }}</span>
		</template>
		<template v-else>
			<el-form
				hide-required-asterisk
				:model="loginForm"
				:rules="rules"
				ref="loginForm"
				labelWidth="80px"
			>
				<el-form-item label="用户名" prop="account">
					<el-input
						clearable
						placeholder="请输入用户名"
						v-model="loginForm.account"
					></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input
						clearable
						show-password
						placeholder="请输入密码"
						v-model="loginForm.password"
					></el-input>
				</el-form-item>
				<el-button type="primary">
					登录
				</el-button>
			</el-form>
		</template>
	</section>
</template>

<script>
export default {
	data() {
		return {
			loginForm: {
				account: '',
				password: '',
			},
			rules: {
				account: [
					{ required: true, message: '用户名必须填写', trigger: 'blur' },
				],
				password: [
					{ required: true, message: '密码必须填写', trigger: 'blur' },
				],
			},
			modeState: 2,
			modeConfig: [
				{
					path: '/',
					icon: '/source/ic_idcard.png',
					title: '请在读卡器上刷卡验证身份',
				},
				{
					path: '/',
					icon: 'ic_qrCode_scan',
					title: '请使用微信扫描上方二维码登录',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.card {
	min-width: 854px;
	min-height: 425px;
	width: (854px/1280px * 100%);
	height: (425px/1024px * 100%);

	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;

	&-img {
		margin-bottom: 60px;
	}

	form {
		text-align: center;
		width: (400px / 854px * 100%);

		.el-form-item {
			margin-bottom: 44px;
		}

		button {
			margin-top: 10px;
			width: (258px / 400px * 100%);
		}
	}
}
</style>
