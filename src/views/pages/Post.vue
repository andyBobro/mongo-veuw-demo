<template lang="pug">
  section.section
    .section__inner
      router-link(to="/posts") ← Back
      
      template(v-if="getPostById(postId)")
        h1.post__heading {{ getPostById(postId).title }}

        p {{ getPostById(postId).text }}

</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Post',
  data () {
    return {
      postId: this.$route.params.id
    }
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapGetters('posts', ['getPostById'])
  },
  mounted () {
    if (!this.getPostById(this.postId)) {
      this.$store.dispatch('posts/getPosts')
    }
  }
};
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 40px;
    padding: 20px;
    border: 1px solid #eee;
    &__heading {
      border-bottom: 1px solid #000;
    }
  }
</style>
