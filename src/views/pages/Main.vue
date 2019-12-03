<!-- <template lang="pug" src="./App.pug"></template> -->
<template lang="pug">
  .content
    .content__bg
      video.content__bg-video(src="/src/assets/videos/bg.mp4" autoplay loop)
      .content__bg-overlay
    .h-wrap
      div.h1 Big
      div.h2 Title
      div.h3 Heading
      
</template>

<script>
export default {
  name: 'Main',
  methods: {

  },
  data() {
    return {

    };
  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>
  .content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &__bg,
    &__bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(white, .5);
      overflow: hidden;
      z-index: -1;
    }
    &__bg-video {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    &__bg-overlay {
      z-index: 1;
    }
  }

  .h-wrap {
    text-align: center;
    * {
      font-family: $font-rs;
      text-transform: uppercase;
      font-weight: 800;
    }
  }

  .h1 {
    font-size: 40vmin;
  }

  .h2 {
    font-size: 22vmin;
  }

  .h3 {
    font-size: 12vmin;
  }
</style>
