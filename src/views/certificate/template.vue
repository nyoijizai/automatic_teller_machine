<template>
	<tzu-card-document :data="documentData">
		<h1 class="title">获奖证明</h1>
		<div class="content">
			<p>
				现有我校
				<ins>
					{{ userData.userFullName ? userData.userFullName : '暂无信息' }}
				</ins>
				（学号
				<ins>
					{{ userData.userCode ? userData.userCode : '暂无信息' }}
				</ins>
				），身份证号码
				<ins>
					{{ userData.userName ? userData.userName : '暂无信息' }}
				</ins>
				。
				<ins>
					{{ documentData.yearName ? documentData.yearName : '暂无信息' }}
				</ins>
				获得
				<ins>
					{{ documentData.levelName ? documentData.levelName : '暂无信息' }}
				</ins>
				。
			</p>
			<p>特此证明。</p>
		</div>
	</tzu-card-document>
</template>

<script>
export default {
	components: {
		tzuCardDocument: () => import('@/components/template/Document'),
	},
	created() {
		// 获取数据
		this.getData();
	},
	data() {
		return {
			userData: {},
			documentData: {},
		};
	},
	methods: {
		// 初始化数据
		getData() {
			const user = JSON.parse(localStorage.getItem('User'));

			this.userData = user;
			// 获取荣誉信息
			this.documentData = this.$route.params.data;
		},
	},
};
</script>
