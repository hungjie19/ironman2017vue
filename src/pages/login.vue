<template>
  <div id="login">
    <img src="static/img/ironman2017.jpg" class="responsive-img">
    <div class="container">
      <div class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="email" class="sr-only">Email address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="form-control"
          placeholder="Email address" required autofocus />
        <label for="inputPassword" class="sr-only">Password</label>
        <!-- 
          2. 在 password input 上面使用 v-toggle-password 帶入 checkbox 的 value
        -->
        <input
          v-model="password"
          v-toggle-password="togglePassword"
          @keyup.enter="login"
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password" required />
        <!-- 1. check box 雙向綁定[布林] -->  
        <div class="squaredFour" style="margin: 20px 10px;">
          <input
            type="checkbox"
            v-model="togglePassword"
            id="togglePassword" />
          <label for="togglePassword" class="checkbox-icon"></label>
          <label for="togglePassword">顯示密碼</label>
        </div>
        <button 
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          @click="login">
          Sign in
        </button>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      email: 'vue_vuex2@ironman2017.tw',
      password: '',
      togglePassword: false,
    }
  },
  methods: {
    // 因為 action 包裝了 Promise 所以可以使用 then 和 catch 來接收非同步回傳狀態
    login () {
      this.$store.dispatch('actionLogin', {
        email: this.email,
        password: this.password
      })
      .then(() => {
        // 使用 $router.push 轉跳到 hello Page
        console.log('3. get Promise resolve');
        setTimeout(() => {
          this.$router.push('/hello');
        }, 1000);
      })
      .catch(() => {
        console.log('error get Promise reject!');
      });
    }
  },
  created () {
    // 在 vue 調用 router
    console.log('vue created:', this.$route.matched[0]);
  }
}
</script>

<style>
  .responsive-img {
    width: 100%;
  }

  #login {
    padding-bottom: 40px;
  }
  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }
  .form-signin .checkbox {
    font-weight: normal;
  }
  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
