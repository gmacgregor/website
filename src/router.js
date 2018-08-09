import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import Home from "./components/Home.vue";
import Post from "./components/Post.vue";

Vue.use(Router);
Vue.use(Meta);

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