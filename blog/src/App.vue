<template>
  <section id="fay-blog">
    <blog-header></blog-header>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

  #fay-blog {
    font-family: STHeiti,"Helvetica Neue",Helvetica,Arial,'Microsoft Yahei',sans-serif,'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
  ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  img {
    display: block;
  }

</style>

<script>
  export default {
      components: {

      }
  }
</script>
