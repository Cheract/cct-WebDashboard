import Vue from "vue";
import VueRouter from "vue-router";
// import { auth } from "../api";

// pages
import SignIn from "../views/SignIn.vue";
import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    meta: {
      auth: false,
    },
  },
  {
    path: "/main",
    name: "MainView",
    component: MainView,
    meta: {
      auth: false,
    },
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "",
  routes,
});

function navigationGuard(to, from, next) {
  let auth = to.meta.auth;
  if (auth) {
    // console.debug('token found', token, to, from)
    // isAuth(() => {
    //   if (token) {
    //     next();
    //   } else {
    //     next({ path: LOGIN_PATH, query: { redirect: to.fullPath } });
    //   }
    // });
  } else if (auth === undefined) {
    // console.debug('auth === undefined', auth, to, from)
    next({ path: "/" });
  } else {
    // console.debug('auth !== undefined', auth, to, from)
    next();
  }
}

router.beforeResolve(navigationGuard);

export default router;
