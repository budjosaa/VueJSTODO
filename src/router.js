import vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import userService from "./services/UserService";

vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});
router.beforeEach((to, from, next) => {
  const isLoggedIn = userService.isLoggedIn();

  if (to.meta.guest && isLoggedIn) {
    return next({
      name: "todos"
    });
  }

  if (!to.meta.guest && !isLoggedIn) {
    return next({
      name: "login"
    });
  }

  return next();
});

export default router;
