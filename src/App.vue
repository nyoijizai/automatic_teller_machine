<template>
	<a-layout class="tzu-layout">
		<a-layout-content class="tzu-content">
			<!-- <a-spin size="large" :spinning="spinning" :indicator="indicator"> -->
			<router-view />
			<!-- </a-spin> -->
		</a-layout-content>
	</a-layout>
</template>

<script>
export default {
	data() {
		return {
			spinning: false,
			indicator: <a-icon type='loading' style='font-size: 80px' spin />,
		};
	},
};
</script>
