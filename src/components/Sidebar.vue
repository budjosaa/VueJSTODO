<template>
  <div>
    <div v-if="!loggedIn">
      <router-link v-if="!loggedIn" to="/login">LogIn</router-link>
      <router-link v-if="!loggedIn" to="/register">Register</router-link>
    </div>
    <button v-else v-on:click="logout">LogOut</button>
  </div>
</template>
<script>
import userService from "../services/UserService";
import { mapGetters } from "vuex";
export default {
  name: "Sidebars",

  computed: {
    ...mapGetters("users", {
      loggedIn: "getIsLoggedIn"
    })
  },
  methods: {
    logout: function() {
      this.$store.dispatch("users/logOutUser");
      this.$router.push("/");
    }
  }
};
</script>
