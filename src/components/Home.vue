<template>
  <div class="hello">
    <!-- <div v-if="$apollo.loading">Apollo is loading...</div>
    <div v-if="$apollo.queries.posts.loading">Posts are Loading...</div> -->
    <section v-if="posts">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h3>{{post.title}}</h3>
          <router-link :to="`/post/${post.slug}`" class="link">
            <div class="placeholder">
              <img 
                alt="Photo" 
                :src="`https://media.graphcms.com/resize=w:400,fit:crop/${post.coverImage.handle}`"
              />
            </div>
          </router-link>
        </li>
      </ul>
      <!-- <button v-if="postCount && postCount > allPosts.length" @click="loadMorePosts">
        {{loading ? 'Loading...' : 'Show more'}}
      </button> -->
    </section>
    <h2 v-else>No posts</h2>
  </div>
</template>

<script>
import ALL_POSTS_QUERY from "../graphql/Posts.gql"

export default {
  name: "Home",
  data: () => {
    return {
      posts: []
    }
  },
  apollo: {
    posts: {
      query: ALL_POSTS_QUERY,
      variables: {
        skip: 0,
        first: 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
