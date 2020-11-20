<template>
	<section class="home tzu-card">
		<div class="tzu-card-header">
			<a-avatar :size="67" :src="require(`@/assets/img/user_avatar@2x.png`)" />
			<div class="meta">
				<div class="meta-item">
					<span class="title">张三</span>
					<span>486871567</span>
				</div>
				<div class="meta-item">
					<span>计算机科学与技术学院</span>
					<span>计算机科学与技术（苏软嵌入）</span>
					<span>17 计科（嵌入）2 班</span>
				</div>
			</div>
			<div class="action">
				<a-button block size="large" shape="round" type="danger">打印</a-button>
			</div>
		</div>
		<div class="tzu-card-body tzu-grid tzu-grid-3">
			<div class="grid-item tzu-card" v-for="(item, index) in menuConfig">
				<div class="grid-item-wrap">
					<a-avatar
						:size="60"
						shape="square"
						:src="require(`@/assets/img/icon/${item.icon}@2x.png`)"
					/>
					<span class="item-label">{{ item.label }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			menuConfig: [
				{
					mode: 'ID',
					label: '成绩单查询打印',
					icon: 'icon_user_grade',
				},
				{
					mode: 'IC',
					label: '在读证明打印',
					icon: 'icon_user_postgraduate',
				},
				{
					mode: 'AP',
					label: '获奖证明打印',
					icon: 'icon_user_glory',
				},
				{
					mode: 'QR',
					label: '图书借阅查询',
					icon: 'icon_user_library',
				},
				{
					mode: 'AP',
					label: '一卡通查询',
					icon: 'icon_user_ecard2',
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
