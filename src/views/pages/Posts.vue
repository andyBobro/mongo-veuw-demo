<!-- <template lang="pug" src="./App.pug"></template> -->
<template lang="pug">
  section.section
    .section__inner
      h1(style="border-bottom: 1px solid #000;") Posts
      .post-row(v-if="getPostsCount > 0")
        Post(v-for="p in posts" :key="p._id" :data="p")

      h5 No posts yet
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters } from 'vuex'
import Post from '../components/Posts/Post.vue'

export default {
  name: 'Posts',
  mounted() {
    this.$store.dispatch('posts/getPosts')
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapGetters('posts', ['getPostsCount'])
  },
  components: {
    Post
  }
};
</script>

<style lang="scss" scoped>
  .post-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
  }
</style>
