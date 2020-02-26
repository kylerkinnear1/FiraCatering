import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MenuPage from "@/views/MenuPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/home"
  },
  {
    path: "/home",
    component: HomePage
  },
  {
    path: "/menu",
    component: MenuPage
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/contact",
    component: ContactPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
