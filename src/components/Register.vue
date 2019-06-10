<template>
  <div>
    <p>Username:</p>

    <input type="text" v-model="username">

    <p>Email:</p>

    <input type="text" v-model="email">

    <p>Password:</p>

    <input type="password" v-model="password">
    <br>

    <button v-on:click="register">Register</button>

    <p>{{registrationError}}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      username: ""
    };
  },
  computed: {
    ...mapGetters("users", {
      registrationError: "getReistrationError"
    })
  },

  methods: {
    async register() {
      await this.$store.dispatch("users/registerUser", {
        email: this.email,
        password: this.password,
        username: this.username
      });
      this.$router.push("/todos");
    }
  }
};
</script>
