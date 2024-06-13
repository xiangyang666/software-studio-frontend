import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import login from "./../views/login/index.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/home",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./../views/home/index.vue"),
    },
  ],
});

export default router;
