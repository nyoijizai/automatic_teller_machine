import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/less/index.less";
import { Icon } from "ant-design-vue";
import { List } from "ant-design-vue";
import { Avatar } from "ant-design-vue";
import { Layout } from "ant-design-vue";
import { Button } from "ant-design-vue";
import { PageHeader } from "ant-design-vue";
import { Statistic } from "ant-design-vue";

Vue.use(Icon);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Layout);
Vue.use(Button);
Vue.use(PageHeader);
Vue.use(Statistic);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
