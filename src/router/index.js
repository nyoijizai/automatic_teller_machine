import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/home.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/Login/login.vue'),
		beforeEnter: (to, from, next) => {
			const data = localStorage.getItem('Token');

			if (Boolean(data)) {
				next({ name: 'Home' });
			} else next();
		},
	},
	{
		path: '/mode',
		name: 'mode',
		component: () => import('@/views/Login/template.vue'),
	},
	{
		path: '/education',
		name: 'EducationCertificate',
		component: () => import('@/views/certificate/education.vue'),
	},
	{
		path: '/honor',
		name: 'honorCertificate',
		component: () => import('@/views/certificate/honor.vue'),
	},
	{
		path: '/template',
		name: 'Template',
		component: () => import('@/views/certificate/template.vue'),
	},
	{
		path: '/archive',
		name: 'Archive',
		component: () => import('@/views/archive/archive.vue'),
	},
	{
		path: '/reportCard',
		name: 'ArchiveTemplate',
		component: () => import('@/views/archive/template.vue'),
	},
	{
		path: '/union',
		name: 'Union',
		component: () => import('@/views/union/union.vue'),
	},
	{
		path: '/information',
		name: 'UnionInformation',
		component: () => import('@/views/union/information.vue'),
	},
	{
		path: '/tracker',
		name: 'UnionTracker',
		component: () => import('@/views/union/tracker.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: '/printer',
	// base: process.env.BASE_URL,
	routes,
});

export default router;
