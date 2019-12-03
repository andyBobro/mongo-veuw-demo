import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/pages/Main.vue'
import About from './views/pages/About.vue'
import Posts from './views/pages/Posts.vue'
import Post from './views/pages/Post.vue'
import AddPost from './views/pages/AddPost.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    // уже 2 часа ночи, сделаю завтра через children
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/add-post',
      name: 'AddPost',
      component: AddPost
    }
  ]
})
