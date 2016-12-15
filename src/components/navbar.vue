<template>
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">component</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">

        <!-- 設計為這段 slot 會插在 nav 的右邊（因為 css 設計） -->
        <form class="navbar-form navbar-right">
          <slot name='right'>
            <!-- 包裹在 slot 裡面的這段 code 是預設 -->    
          </slot>
        </form>

      </div><!--/.navbar-collapse -->
    </div>
  </nav>
  
</template>

<script>

</script>

<style>
  
</style>
