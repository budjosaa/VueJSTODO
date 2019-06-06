<template>
  <div>
    <table>
      <th>Email:</th>
      <tr>
        <input type="text" v-model="email">
      </tr>
      <th>Password:</th>
      <tr>
        <input type="password" v-model="password">
      </tr>
      <tr>
        <button v-on:click="logIn(email,password)">Log In</button>
      </tr>
    </table>
  </div>
</template>
<script>
import userService from "../services/UserService";
import { async } from "q";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    logIn: async function(email, password) {
      await this.$store.dispatch("users/logInUser", {
        email: email,
        password: password
      });
      this.$router.push("/todos");
    }
  }
};
</script>
