<template>
	<!-- 卡片 -->
	<section class="card bg-blur" :class="`container-${size}`">
		<!-- 卡片 头部 -->
		<template>
			<div class="card-header">
				<img class="card-img-badge" src="../assets/img/user_avatar@2x.png" />
				<div class="card-nyoi">
					<p class="card-title">
						<span>{{ data.name }}</span>
						<span class="card-jizai">{{ data.id }}</span>
					</p>
					<p class="card-subtitle">
						<span class="card-jizai">{{ data.department }}</span>
						<span class="card-jizai">{{ data.specialty }}</span>
						<span class="card-jizai">{{ data.class }}</span>
					</p>
				</div>
				<slot name="action" />
			</div>
		</template>
		<!-- 卡片 主体 -->
		<div class="card-body">
			<slot />
		</div>
		<!-- 卡片 底部 -->
	</section>
	<!-- 结束 卡片 -->
</template>

<script>
export default {
	name: 'tzuCard',
	props: {
		size: String,
		data: Object,
	},
	data() {
		return {
			sizeClass: this.size,
		};
	},
};
</script>

<style lang="scss" scoped>
.container-fluid {
	flex: auto;
}
</style>
