<template>
  <div id="jumbotron">
    <nav-bar/>
    <jumbotron />
    <container />
  </div>
</template>

<script>
import NavBar from '../components/navbar.vue';
import Jumbotron from '../components/jumbotron.vue';
import Container from '../components/container.vue';

export default {
  components: {
    NavBar,
    Jumbotron,
    Container
  }
}
</script>

<style>
  /* Move down content because we have a fixed navbar that is 50px tall */
  #jumbotron {
    padding-top: 50px;
    padding-bottom: 20px;
  }
</style>