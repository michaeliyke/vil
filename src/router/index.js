import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../home/HomeComponent.vue";
import DashboardComponent from "../dashboard/DashboardComponent.vue";
import NotFoundComponent from "../notfound/NotFoundComponent.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomeComponent,
    },
    {
      path: "/home",
      name: "UserDashboard",
      component: DashboardComponent,
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
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: NotFoundComponent,
    },
  ],
});
