import userService from "../../services/UserService";
import router from "../../router";
const state = {
  loginError: "",
  registrationError: "",
  user: null
};
const getters = {
  getLoginError: () => {
    return state.loginError;
  },
  getReistrationError: () => {
    return state.registrationError;
  },
  getUser: () => {
    return state.user;
  },
  getIsLoggedIn: () => {
    return !!state.user;
  }
};
const mutations = {
  setLoginError(state) {
    state.loginError = "Invalid credientials!";
  },
  setRegistrationError(state) {
    state.registrationError = "Invalid registration credientials";
  },
  setUser(state, user) {
    state.user = user;
  }
};
const actions = {
  async logInUser({ commit }, data) {
    try {
      const result = await userService.login(data.email, data.password);
      commit("setUser", result.user);
      return result.user;
    } catch (err) {
      console.log(err);
      commit("setLoginError");
    }
  },
  async registerUser({ commit }, data) {
    try {
      const result = await userService.register(
        data.email,
        data.password,
        data.username
      );
      commit("setUser", result.user);
    } catch (err) {
      commit("setRegistrationError");
    }
  },
  logOutUser({ commit }) {
    userService.logout();
    commit("setUser", null);
  },
  async fetchUser({ commit }) {
    try {
      if (userService.isLoggedIn()) {
        const result = await userService.fetchUserData();
        commit("setUser", result.user);
      } else {
        router.push({ name: "login" });
      }
    } catch (err) {
      console.log(err);
    }
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
