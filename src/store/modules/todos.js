import todos from "../../services/TodoService";

// initial state
// shape: [{ id, quantity }]
const state = {
  todos: []
};

// getters
const getters = {
  getAllTodos: () => {
    return state.todos;
  }
};

// actions
const actions = {
  fetchTodos({ commit }) {
    todos
      .getTodos()
      .then(res => {
        commit("setTodos", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

// mutations
const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
