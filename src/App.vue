<template>
  <div id="app">
    <div id="nav">
      <router-view/>
      <Sidebar/>
    </div>
  </div>
</template>
<script>
import LogIn from "./components/LogIn";
import userService from "./services/UserService";
import Sidebar from "./components/Sidebar";
import ListOfTodos from "./components/ListOfTodos";

export default {
  name: "app",
  components: {
    LogIn,
    Sidebar
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
