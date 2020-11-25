import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import '@/assets/less/index.less';

import {
	Layout,
	Avatar,
	message,
	Spin,
	Icon,
	Button,
	List,
	Table,
	Descriptions,
	Divider,
	Skeleton,
	Select,
	DatePicker,
} from 'ant-design-vue';

Vue.config.productionTip = false;
Vue.prototype.$message = message;
Vue.use(Layout);
Vue.use(Avatar);
Vue.use(Spin);
Vue.use(Select);
Vue.use(Icon);
Vue.use(Button);
Vue.use(List);
Vue.use(Table);
Vue.use(Divider);
Vue.use(Skeleton);
Vue.use(DatePicker);
Vue.use(Descriptions);

message.config({
	duration: 4,
	maxCount: 1,
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
