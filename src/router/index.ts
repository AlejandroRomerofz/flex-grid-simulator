import { createRouter, createWebHistory } from "vue-router";
import FlexView from "../views/FlexView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "flex",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: FlexView,
    },
    {
      path: "/grid",
      name: "grid",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GridView.vue"),
    },
  ],
});

export default router;
