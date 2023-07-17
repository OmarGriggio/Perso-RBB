//import { applyStyles } from "@popperjs/core";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/playerManage",
      name: "playerManage",
      component: () => import("../views/PlayerManage.vue"),
    },
  ],
});

export default router;
