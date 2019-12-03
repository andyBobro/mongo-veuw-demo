<template lang="pug">
  header.header
    .section__inner.header__inner.fl
      router-link.header__logo-wrap(to="/")
        img.header__logo(src="/src/assets/imgs/CAT.svg")
      h4.header__caption Logo

      nav.header__nav.header-nav.fl
        ul.header__nav-list.header-nav__list.fl
          li.header-nav__item
            router-link.nav-link(to="/" exact) Main
          li.header-nav__item
            router-link.nav-link(to="/about") About
          li.header-nav__item
            router-link.nav-link(to="/posts") Posts
          li.header-nav__item
            router-link.nav-link(to="/add-post") Add a post
</template>

<script>
export default {
  name: 'headbar'
};
</script>
<style lang="scss">
  .header {
    position: relative;
    box-shadow: 0px 0px 18px 1px rgba(138,136,138,0.73);
    z-index: 1;
    &__logo { 
      height: 30px;
      @media screen and (min-width: 480px) {
        height: 50px;
      }
      @media screen and (min-width: 768px) {
        height: 80px;
      }
    }
    &__nav,
    &__nav-list {
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: flex-end;
    }
    &__caption {
      display: none;
      margin: 0;
      margin-left: 10px;
      @media screen and (min-width: 480px) {
        display: flex;
        align-items: center;
      }
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

  .nav-link {
    position: relative;
    text-decoration: none;
    font-size: 12px;
    @media screen and (min-width: 480px) {
      font-size: 16px;
    }
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      top: 100%;
      left: 50%;
      margin-top: 2px;
      background-color: black;
      transform: translateX(-50%);
      transition: all ease .3s;
    }
    &:hover {
      text-decoration: none;
      &:after {
        width: 100%;
      }
    }
    &.router-link-active {
      &:after {
        width: 100%;
      }
    }
  }
</style>
