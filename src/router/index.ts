import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
        import("../pages/HomePage/HomePage.vue"),
  },
  {
    path: "/examples",
    name: "Examples",
    component: () =>
      import("../pages/ExamplesPage/ExamplesPage.vue"),
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () =>
        import("../pages/CalculatorPage/CalculatorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
