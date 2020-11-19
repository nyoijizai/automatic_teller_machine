import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/template",
    name: "Template",
    component: () => import("@/views/Login/Template.vue")
  },
  {
    path: "/user/:id",
    name: "UserHome",
    component: () => import("@/views/User/User.vue"),
    children: [
      {
        path: "list",
        name: "UserList",
        component: () => import("@/views/User/List.vue")
      },
      {
        path: "transcript",
        component: () => import("@/views/Transcript/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "/printer",
  routes
});

// router.beforeEach((to, from, next) => {
// 	if (to.name !== 'Login') next({ name: 'Login' });
// 	else next();
// });

export default router;
