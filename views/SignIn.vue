<template>
  <div class="main-wrapper">
    <v-spacer></v-spacer>
    <div class="login-form">
      <div class="logo-image">
        <img src="../public/whale.svg" width="150px" />
      </div>
      <div class="form-wrapper">
        <v-form>
          <div class="input-wrapper">
            <div class="input-label">ID</div>
            <v-text-field v-model="username" autofocus dense solo />
          </div>
          <div class="input-wrapper">
            <div class="input-label">Password</div>
            <v-text-field
              v-model="password"
              autofocus
              dense
              solo
              type="password"
            />
          </div>
          <v-btn
            style="margin-top: 20px"
            color="blue white--text"
            block
            @click="goToMainPage"
            >Login</v-btn
          >
        </v-form>
      </div>
    </div>
    <p>
      COPYRIGHT BLUEWHALE INC. ALL RIGHTS RESERVED.
    </p>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    goToMainPage() {
      this.$router.push("/main");
    },
  },
};
</script>

<style>
.main-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-form {
  height: 600px;
  width: 750px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  margin-bottom: 10px;
}

.logo-image {
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  width: 65%;
  height: 100%;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input-wrapper div {
  text-align: left;
}

.input-label {
  margin-bottom: 8px;
}
</style>
