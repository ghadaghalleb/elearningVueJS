import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./components/pages/Home.vue";
import certifications from "./components/pages/certifications.vue";
import cours from "./components/pages/cours.vue";
import communaute from "./components/pages/communaute.vue";
import Actualites from "./components/pages/Actualites.vue";
import connexion from "./components/pages/connexion.vue";
import inscription from "./components/pages/inscription.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/certifications", component: certifications},
  { path: "/cours", component: cours},
  { path: "/communaute", component: communaute},
  { path: "/Actualites", component: Actualites},
  { path: "/connexion", component: connexion},
  { path: "/inscription", component: inscription}


//   { path: "/notre-ecole", component: ITBS }

];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
});
export default router;