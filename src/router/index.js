import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/home'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/login'),
	},
	{
		path: '/login/template',
		name: 'Template',
		component: () => import('@/views/login/template'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// router.beforeEach((to, from, next) => {
// 	if (to.name == 'Home') {
// 		next({ name: 'Login' });
// 	} else {
// 		next();
// 	}
// });

export default router;
