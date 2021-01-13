import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
  hasLogin: false,
  MAC: '',
 },
 mutations: {
  Login(state, user) {
   localStorage.setItem('User', JSON.stringify(user.user));
   localStorage.setItem('Token', user.token);
   state.hasLogin = !state.hasLogin;
  },
  Logout(state) {
   localStorage.clear();
   state.hasLogin = !state.hasLogin;
  },
 },
 actions: {},
 modules: {},
});
