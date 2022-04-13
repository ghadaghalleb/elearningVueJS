import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./components/pages/Home.vue";
import certifications from "./components/pages/certifications.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/certifications", component: certifications}
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