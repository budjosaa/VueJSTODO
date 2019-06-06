import user from "../../services/UserService";
const state = {};
const getters = {};
const mutations = {};
const actions = {
  async logInUser({ commit }, data) {
    try {
      await user.login(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  },
  async registerUser({ commit }, data) {
    try {
      await user.register(data.email, data.password, data.username);
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
