export const appRoutes = [
  {
    name: "LDP",
    path: "/",
    component: () => import("../../view/LandingPage.vue"),
    meta: { authRequired: false, layout: "app" }
  },
  {
    name: "Map",
    path: "/map",
    component: () => import("../../view/Map.vue"),
    meta: { authRequired: false, layout: "app" }
  },
  {
    name: "BMChef",
    path: "/bm-chef",
    component: () => import("../../view/BMChefs.vue"),
    meta: { authRequired: false, layout: "app" }
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: () => import("../../view/SignUp.vue"),
    meta: { authRequired: false, layout: "app" }
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("../../view/Login.vue"),
    meta: { authRequired: false, layout: "app" }
  }
];
