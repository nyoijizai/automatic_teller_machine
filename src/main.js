import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import '@/assets/less/index.less';

import { Layout } from 'ant-design-vue';
import { Avatar } from 'ant-design-vue';
import { Spin } from 'ant-design-vue';
import { Icon } from 'ant-design-vue';
import { Button } from 'ant-design-vue';

Vue.use(Layout);
Vue.use(Avatar);
Vue.use(Spin);
Vue.use(Icon);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
