export default {
  getPostsCount (state) {
    return state.posts.length
  },
  getPostById(state) {
    return (id) => {
      return state.posts.find(post => post._id === id)
    }
  }
}