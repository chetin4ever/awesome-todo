import { boot } from "quasar/wrappers";
import { LocalStorage } from "quasar";
export default boot(({ router }) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem("loggedIn");
    // console.log(to);
    if (!loggedIn && to.path !== "/auth") {
      next("/auth");
    } else {
      next();
    }
  });
});
