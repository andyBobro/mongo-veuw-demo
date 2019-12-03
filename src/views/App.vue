<!-- <template lang="pug" src="./App.pug"></template> -->
<template lang="pug">
  main.wrapper
    Headbar
    router-view
</template>

<script>
import Headbar from './components/common/Headbar.vue'

export default {
  name: 'app',
  methods: {

  },
  components: {
    Headbar
  },
  data() {
    return {

    };
  },
  mounted() {

  }
};
</script>

<style lang="scss" src="../style/global/global.scss"></style>
<style lang="scss">
  .header {
    box-shadow: 0px 0px 18px 1px rgba(138,136,138,0.73);
    &__nav,
    &__nav-list {
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: flex-end;
    }
  }

  .header-nav {
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
    }
  }

  .header-logo {
    display: block;
    height: 100%;
  }
</style>

<style lang="scss" scoped>
  .bg1  {
    color: #fff;
    background: url(/src/assets/imgs/bricks.jpg) center no-repeat;
  }
  .bg2  {
    color: #fff;
    background: url(/src/assets/imgs/bricks1.jpg) center no-repeat;
  }
</style>
