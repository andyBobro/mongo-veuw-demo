import { getData, postData } from '../api'

export default {
  getPosts (context) {
    getData('/posts').then((response) => {
      context.commit('SET_POSTS', response.data)
    })
  }
}