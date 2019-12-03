<template lang="pug">
section.section
  .section__inner
    h1(style="border-bottom: 1px solid #000;") Add a post
    .add-post(v-if="loadState === 'initial'")
      .input-wrap
        label(for="title") Title
        input#title(type="text", v-model="post.title")
      .input-wrap
        label Text
        textarea(v-model="post.text")
      .input-wrap
        button(@click="addPostHandler()") Publish
    h4(v-if="loadState === 'loading'") Uploading....
    h4(v-if="loadState === 'loaded'") Your post uploaded
</template>

<script>
import { postData } from '../../store/api';

export default {
  name: 'AddPost',
  methods: {
    addPostHandler () {
      this.addPost(this.post.title, this.post.text)
    },

    addPost (title, text) {
      this.loadState = 'loading'
      postData('/posts', {
        title,
        text
      }).then(() => {
        this.loadState = 'loaded'
      })
    },

    clearForm () {
      this.post.title = ''
      this.post.text = ''
    }
  },
  data() {
    return {
      post: {
        title: '',
        text: ''
      },
      loadState: 'initial'
    };
  },
  watch: {
    loadState(v) {
      if (v === 'loaded') {
        let t = setTimeout(() => {
          this.clearForm()
          this.loadState = 'initial'
          clearTimeout(t)
        }, 3000)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .input-wrap {
    margin-bottom: 20px;
  }

  label {
    margin-bottom: 10px;
    font-family: $font-r;
    font-size: 14px;
  }

  input[type="text"] {
    display: block;
    width: 100%;
    padding: 0 5px;
    font-size: 16px;
    font-family: $font-r;
    line-height: 38px;
    border: 1px solid #000;
    transition: all ease .3s;
    &:focus {
      outline: none;
      border: 1px solid green;
    }
  }

  textarea {
    display: block;
    width: 100%;
    height: 150px;
    padding: 10px;
    font-size: 16px;
    font-family: $font-r;
    line-height: 24px;
    border: 1px solid #000;
    transition: all ease .3s;
    &:focus {
      outline: none;
      border: 1px solid green;
    }
  }

  button {
    position: relative;
    display: inline-block;
    padding: 0 20px;
    line-height: 58px;
    font-size: 20px;
    background-color: #fff;
    border: 1px solid #000;
    font-family: $font-r;
    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(green, .8);
      transition: all ease .3s;
      z-index: -1;
    }
    &:hover {
      &:after {
        transform: translate(5px, 5px);
      }
    }
    &:focus {
      outline: none;
    }
  }
</style>
