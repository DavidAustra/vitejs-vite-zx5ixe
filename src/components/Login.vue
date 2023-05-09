<script>
export default {
  data() {
    return {
      isPasswordVisible: false,
      isPasswordWrong: false,
      isUsernameWrong: false,
      username: '',
      password: '',
      errorMessage: 'Password or Username is wrong!',
    };
  },

  methods: {
    changeScreen() {
      this.SignUp = !this.SignUp;
    },
  },
};
</script>

<template>
  <main class="MainLogin">
    <header>
      <h1 class="companyName">TFE | Taxi For Everyone</h1>
    </header>

    <div class="username">
      <va-input
        v-if="!isUsernameWrong"
        v-model="username"
        class="mb-6"
        label="Enter Username"
        placeholder="Username..."
        color="#000000"
      />

      <va-input
        v-if="isUsernameWrong"
        v-model="username"
        class="mb-6"
        label="Enter Username"
        placeholder="Username..."
        color="#000000"
      />
    </div>

    <div class="password">
      <va-input
        v-model="password"
        :type="isPasswordVisible ? 'text' : 'password'"
        label="Enter Password"
        placeholder="Password..."
        class="mr-6 mb-6"
        color="#000000"
      >
        <template #appendInner>
          <va-icon
            :name="isPasswordVisible ? 'visibility_off' : 'visibility'"
            size="small"
            color="#000000"
            @click="isPasswordVisible = !isPasswordVisible"
          />
        </template>
      </va-input>
    </div>

    <div>
      <va-button
        class="losbutton"
        style="position: relative; top: 150px"
        color="#00BA7C"
        text-color="#FFFFFF"
        round
      >
        Log in</va-button
      >
    </div>

    <div class="devider">
      <div class="line" style="position: relative; top: 11px; left: 70px"></div>
      <div
        class="line"
        style="position: relative; top: 10px; left: 250px"
      ></div>
      <p>or</p>
    </div>

    <div>
      <va-button
        class="losbutton"
        style="position: relative; top: 225px"
        color="#FFFFFF"
        border-color="#000000"
        text-color="#000000"
        round
        @click="changeScreen"
      >
        Sign up</va-button
      >
    </div>
  </main>
</template>
