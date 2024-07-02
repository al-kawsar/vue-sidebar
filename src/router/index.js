import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";

// import NotFound from "@/views/Errors/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/team",
      name: "team",
      component: Team,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    // {
    //   path: "/:pathMatch",
    //   name: "notFound",
    //   component: NotFound,
    // },
  ],
});

export default router;
