<!-- <template lang="pug" src="./App.pug"></template> -->
<template lang="pug">
  .content
    section.section
      .section__inner
        h1
          | Доброго времени суток!

        p
          | Этот маленкий демо-проект для собеседования я собрал из прошлых своих наработок "для себя" по node.js за один вечер и написал небольшое приложение,
          | которое умеет добавлять посты в mongoDB, выводить их на страницу, а также просматривать каждый из них.
        p
          | В качестве сборщика для фронтенда был использован самописный конфиг webpack, также используется шаблонизатор 
          b  pug
          |  и препроцессор
          b  scss,
          |  для роутинга и управления состоянием использованы 
          b  vue-router
          |  и
          b  vuex.
      
</template>

<script>
export default {
  name: 'Main'
};
</script>

<style lang="scss" scoped>
  
</style>
