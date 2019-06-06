import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import users from "./modules/users";

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    todos,
    users
  }
  //strict: debug
});
