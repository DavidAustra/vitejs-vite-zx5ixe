<script>
import LoginPage from './components/Login.vue';

export default {
  data() {
    return {
      isPasswordVisible: false,
      isPasswordWrong: false,
      isUsernameWrong: false,
      username: '',
      password: '',
      errorMessage: 'Password or Username is wrong!',
      SignUp: false,

      value: 'English',
      options: ['Swedish', 'English'],
    };
  },

  components: {
    LoginPage,
  },
};
</script>

<template>
  <div class="language-container">
    <va-select v-model="value" class="mb-6" :options="options" hide-selected />
  </div>

  <div class="ballcontainer">
    <!--Front-end devs be like-->
    <div
      class="ball"
      style="top: -200px; left: -200px"
      data-size="constant-large"
    ></div>
    <div class="ball" style="top: 0%; left: 55%" data-size="medium-small"></div>
    <div class="ball" style="top: 10%; left: 90%" data-size="small-small"></div>
    <div class="ball" style="top: 20%; left: 75%" data-size="small"></div>
    <div
      class="ball"
      style="top: calc(40% - 10vw); left: 20%"
      data-size="large"
    ></div>
    <div
      class="ball"
      style="top: calc(60% - 10vw); left: 55%"
      data-size="large-large"
    ></div>
    <div class="ball" style="top: 70%; left: 7%" data-size="medium-small"></div>
    <div
      class="ball"
      style="top: calc(90% - 2vw); left: 25%"
      data-size="small-small"
    ></div>
    <div
      class="ball"
      style="top: calc(85% - 8vw); left: calc(85% + calc(1vw / 1000))"
      data-size="medium-small"
    ></div>
  </div>

  <LoginPage v-if="!SignUp" />
  <h1 v-else>Hello</h1>
</template>
