import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import DetailView from "../views/DetailView.vue";
import PricingView from "../views/PricingView.vue";
import SuccessView from "../views/SuccessView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import CategoryItems from "../views/CategoryItems.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/product/:id",
      name: "product",
      component: DetailView,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },
    {
      // listing produk dari si category nya sendiris
      path: "/categories/:id",
      name: "category-items",
      component: CategoryItems,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },
  ],
});

export default router;
