<template>
  <div>
    <form>
      <p>Email:</p>
      <input name="email" v-validate="'required'" type="text" v-model="email">
      <br>
      <p>Password:</p>
      <input name="password" v-validate="'required|min:6'" type="password" v-model="password">
      <br>
      <button @click.prevent="logIn">Log In</button>
      <p>{{loginError}}</p>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters("users", {
      loginError: "getLoginError"
    })
  },

  methods: {
    logIn() {
      this.$store
        .dispatch("users/logInUser", {
          email: this.email,
          password: this.password
        })
        .then(res => this.$router.push({ name: "todos" }));
    }
  }
};
</script>
