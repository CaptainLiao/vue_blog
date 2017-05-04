<template>
  <div class="main">

    <blog-banner></blog-banner>
    <blog-hello></blog-hello>
  </div>
</template>


<script type="text/javascript">
  export default {
      mounted() {

      },
      components: {
          'blog-hello': require('@/components/hello'),
          'blog-banner': require('@/components/banner')
      }
  }
</script>
