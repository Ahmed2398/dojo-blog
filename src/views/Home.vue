<template>
  <div class="home">
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <!-- <div v-else-if="!posts.length" class="layout"> -->
          <div v-else class="layout">

      <Spinner />
    </div>
        <div v-if="error">{{ error }}</div>

  </div>
</template>

<script>
import PostList from '../components/PostList.vue'

import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud.vue'

// component imports
import Spinner from '../components/Spinner.vue'



export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() { 
    const { posts, error, load } = getPosts();

    load()
    
    return { posts, error }
  },
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>