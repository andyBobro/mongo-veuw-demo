<!-- <template lang="pug" src="./App.pug"></template> -->
<template lang="pug">
  .post
    .post__inner
      p.post__date {{dateFormatter}}
      h3.post__heading {{data.title}}
      p.post__text {{textTrimmer}}
      router-link(:to="`/posts/${data._id}`") Read more
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'Posts',
  computed: {
    dateFormatter () {
      return dayjs(this.data.date).format('DD.MM.YYYY')
    },
    textTrimmer () {
      return this.data.text.slice(0, 100) + '...'
    }

  },
  props: {
    data: {
      type: Object,
      default() {
        return {
          title: ' ',
          text: ' ',
          date: newDate
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .post {
    width: 100%;
    margin-bottom: 20px;
    padding: 0 10px;
    @media screen and (min-width: 768px) {
      width: 50%;
    }
    @media screen and (min-width: 1024px) {
      width: 33%;
    }
    &__inner {
      height: 100%;
      border: 1px solid #eee;
      padding: 20px;
    }
  }
</style>
