<template>
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4" v-for="item in list">
        <h2>{{ item.title }}</h2>
        <p>{{ item.info }}</p>
        <p><a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a></p>
      </div>
    </div>

    <hr>

    <footer>
      <p>&copy; 2016 Company, Inc.
        <a href="http://getbootstrap.com/examples/jumbotron/">power by bootstrap example jumbotron</a>
      </p>
      <p>
        <a href="http://ithelp.ithome.com.tw/users/20103326/ironman/1114?page=1">實作小範例入門 Vue & Vuex 2.0 系列</a>
      </p>
      <p>
        <a href="mailto:hungjie19@gmail.com">hungjie19@gmail.com</a>
      </p>
    </footer>
  </div> <!-- /container --> 
</template>

<script>
export default {
  // vue option 當中有 props 開發區域
  props: {
    // attribute name: Type
    list: Array
  }, 
}
</script>

<style>
  
</style>
