<template>
  <div>
    <router-link to="/" class="link">GO BACK HOME</router-link>
    <h2 v-if="!post">
      Loading...
    </h2>
    <article v-else>
      <h1>{{post.title}}</h1>
      <div class='placeholder'>
        <img
          :alt="post.title"
          :src="`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.coverImage.handle}`"
        />
      </div>
      <vue-markdown>{{post.text}}</vue-markdown>
    </article>
  </div>
</template>

<script>
import POST_BY_SLUG_QUERY from "../graphql/Post.gql";
import VueMarkdown from "vue-markdown";

export default {
  name: "Post",
  data: () => {
    return {
      loading: 0,
      post: null
    }
  },
  apollo: {
    $loadingKey: 'loading',
    post: {
      query: POST_BY_SLUG_QUERY,
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  components: { 
    VueMarkdown
  },
  metaInfo: {
    title: "Hello world"
  }
}
</script>