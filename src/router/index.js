import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../home/HomePage.vue";
import UserDashboard from "../dashboard/UserDashboard.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/home",
      name: "UserDashboard",
      component: UserDashboard,
      alias: ["/profile", "/account"],
    },
    {
      path: "/dash",
      redirect: "/home",
    },
    {
      path: "/dashboard",
      redirect: "/home",
    },
  ],
});
