import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/less/index.less';
import '@/assets/scss/index.scss';

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
 router,
 store,
 render: (h) => h(App),
}).$mount('#app');
