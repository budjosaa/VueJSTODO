<template>
  <div>
    <router-link v-if="!loggedIn" to="/login">LogIn</router-link>
    <router-link v-if="!loggedIn" to="/register">Register</router-link>
    <button v-if="loggedIn" v-on:click="logout">LogOut</button>
  </div>
</template>
<script>
import userService from "../services/UserService";
export default {
  name: "Sidebars",
  data() {
    return {
      tekst: "",
      loggedIn: false
    };
  },
  methods: {
    logout: function() {
      userService.logout();
      this.$router.push("/");
    }
  },
  watch: {
    $route(to, from) {
      this.loggedIn = userService.isLoggedIn();
    }
  }
};
</script>
