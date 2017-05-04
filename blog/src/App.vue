<template>
  <section id="fay-blog">
    <blog-header></blog-header>
    <router-view></router-view>
    <blog-footer></blog-footer>
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
    margin-bottom: 320px;
    padding-bottom: 20px;
    background-color: #fff;
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

  p {
    line-height: 2rem;
  }
</style>

<script>
  export default {
      components: {

      }
  }
</script>
