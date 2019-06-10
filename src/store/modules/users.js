import userService from "../../services/UserService";
const state = {
  loginError: "",
  registrationError: ""
};
const getters = {
  getLoginError: () => {
    return state.loginError;
  },
  getReistrationError: () => {
    return state.registrationError;
  }
};
const mutations = {
  setLoginError(state) {
    state.loginError = "Invalid credientials!";
  },
  setRegistrationError(state) {
    state.registrationError = "Invalid registration credientials";
  }
};
const actions = {
  async logInUser({ commit }, data) {
    try {
      await userService.login(data.email, data.password);
    } catch (err) {
      commit("setLoginError");
      console.log(err);
    }
  },
  async registerUser({ commit }, data) {
    try {
      await userService.register(data.email, data.password, data.username);
    } catch (err) {
      commit("setRegistrationError");
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
