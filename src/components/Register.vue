<template>
  <div>
    <table>
      <th>Username:</th>
      <tr>
        <input type="text" v-model="username">
      </tr>
      <th>Email:</th>
      <tr>
        <input type="text" v-model="email">
      </tr>
      <th>Password:</th>
      <tr>
        <input type="password" v-model="password">
      </tr>
      <th>
        <button v-on:click="register(email,password,username)">Register</button>
      </th>
    </table>
  </div>
</template>
<script>
import userService from "../services/UserService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    register: async function(email, password, username) {
      await this.$store.dispatch("users/registerUser", {
        email: email,
        password: password,
        username: username
      });
      this.$router.push("/todos");
    }
  }
};
</script>
