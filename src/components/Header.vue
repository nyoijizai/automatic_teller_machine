<template>
	<div class="page-header">
		<div class="left">
			<el-button type="text" @click="handleBack">
				<i class="icon icon-back"></i>
				<span>返回</span>
			</el-button>
			<el-button type="text">
				<i class="icon icon-quit"></i>
				<span>退出</span>
			</el-button>
		</div>
		<div class="right">
			<el-button type="text" disabled>
				<!-- <i class="icon icon-no-gutters icon-online"></i> -->
				<!-- <span>在线</span> -->
				<i class="icon icon-no-gutters icon-offline"></i>
				<span>断线</span>
			</el-button>
			<el-button type="text" disabled>
				2020年12月25日 19:11:46
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'tzuHeader',
	props: {},
	methods: {
		handleBack() {
			this.$router.go(-1);
		},
	},
};
</script>
