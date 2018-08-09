<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view/>
    </main>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Hello",
    // all titles will be injected into this template
    titleTemplate: '%s | gmac.website'
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  max-width: 2000px;
}
</style>
