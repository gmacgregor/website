import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Post from "./components/Post.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: "home",
      component: Home
    },
    {
      path: "/post/:slug",
      name: "post",
      component: Post
    }
  ]
})