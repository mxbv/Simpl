import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: "/",
    //   name: "App",
    //   component: () => import("./App.vue"),
    // },
    // {
    //   path: "/",
    //   name: "Main",
    //   component: () => import("./views/MainView.vue"),
    // },
    // {
    //   path: "/note/:id",
    //   name: "Note Details",
    //   component: () => import("@/views/NoteView.vue"),
    // },
  ],
});

export default router;
