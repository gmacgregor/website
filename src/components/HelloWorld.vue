<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div v-if="$apollo.loading">Apollo is loading...</div>
    <div v-if="$apollo.queries.posts.loading">Posts are Loading...</div>

    <section v-if="posts">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <!-- <router-link :to="`/post/${post.slug}`" class="link"> -->
            <div class="placeholder">
              <!-- <img
                :alt="post.title"
                :src="`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`"
              /> -->
            </div>
            <h3>{{post.title}}</h3>
          <!-- </router-link> -->
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
import gql from "graphql-tag";

const allPosts = gql`{
  posts(orderBy: dateAndTime_DESC) {
    title,
    dateAndTime,
    slug,
    id,
    text
  }
}`;

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    loading: 0,
    posts: null
  }),
  apollo: {
    $loadingKey: 'loading',
    posts: allPosts,
    variables: {
      skip: 0,
      first: 0
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
