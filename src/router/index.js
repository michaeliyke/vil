import VueRouter from "vue-router";
import HomeComponent from "../home/HomeComponent.vue";
import DashboardComponent from "../dashboard/DashboardComponent.vue";
import NotFoundComponent from "../notfound/NotFoundComponent.vue";

/* this.$route, this.$router */

export default new VueRouter({
  mode: "history",
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
      path: "/404",
      name: "NotFound",
      component: NotFoundComponent,
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
    },
  ],
});
