import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
 {
  path: '/',
  meta: { title: '个人中心' },
  component: () => import('@/views/Home'),
  beforeEnter: (to, from, next) => {
   store.state.hasLogin ? next() : next({ path: '/login' });
  },
  children: [
   {
    path: '',
    meta: { title: '个人中心' },
    component: () => import('@/views/User/index'),
   },
   {
    path: 'transcript',
    meta: { title: '成绩单查询打印' },
    component: () => import('@/views/Transcript/index'),
   },
   {
    path: 'archive',
    meta: { title: '成绩档案表', print: true, size: 'large' },
    component: () => import('@/views/Transcript/archive'),
   },
   {
    path: 'original',
    meta: { title: '成绩单(原始)', print: true, size: 'large' },
    component: () => import('@/views/Transcript/original'),
   },
   {
    path: 'valid',
    meta: { title: '成绩单(有效)', print: true, size: 'large' },
    component: () => import('@/views/Transcript/valid'),
   },
   {
    path: 'education',
    meta: { title: '在读证明打印', print: true },
    component: () => import('@/views/Certificate/education'),
   },
   {
    path: 'awards',
    meta: { title: '获奖证明查询' },
    component: () => import('@/views/Certificate/awards/index'),
   },
   {
    path: 'award',
    meta: { title: '获奖证明打印', print: true },
    component: () => import('@/views/Certificate/awards/award'),
   },
   {
    path: 'library',
    meta: { title: '图书借阅查询' },
    component: () => import('@/views/Library/index'),
   },
   {
    path: 'reader',
    meta: { title: '读者证信息' },
    component: () => import('@/views/Library/reader'),
   },
   {
    path: 'borrowed',
    meta: { title: '借阅记录', filter: true },
    component: () => import('@/views/Library/borrowed'),
   },
   {
    path: 'ecard',
    meta: { title: '一卡通查询' },
    component: () => import('@/views/Ecard/index'),
   },
   {
    path: 'personal',
    meta: { title: '一卡通信息查询' },
    component: () => import('@/views/Ecard/personal'),
   },
   {
    path: 'cashlog',
    meta: { title: '一卡通消费记录', filter: true },
    component: () => import('@/views/Ecard/cashlog'),
   },
  ],
 },
 {
  path: '/login',
  meta: { title: '登录' },
  component: () => import('@/views/Login/index'),
  beforeEnter: (to, from, next) => {
   store.state.hasLogin ? next({ path: '/' }) : next();
  },
  children: [
   {
    path: '',
    meta: { title: '登录' },
    component: () => import('@/views/Login/home'),
   },
   {
    path: 'idCard',
    meta: { title: '身份证登录' },
    component: () => import('@/views/Login/card'),
   },
   {
    path: 'unionCard',
    meta: { title: '校园卡登录' },
    component: () => import('@/views/Login/card'),
   },
   {
    path: 'account',
    meta: { title: '账号密码登录' },
    component: () => import('@/views/Login/input'),
   },
   {
    path: 'qrCode',
    meta: { title: '微信二维码登录' },
    component: () => import('@/views/Login/qrcode'),
   },
  ],
 },
];

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes,
});

// router.beforeEach((to, from, next) => {
//  to.path !== '/login' && !store.state.hasLogin
//   ? next({ path: '/login' })
//   : next();
// });

export default router;
