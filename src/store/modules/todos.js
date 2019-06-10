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
  removeTodo({ commit }, todoId) {
    todos
      .removeTodo(todoId)
      .then(res => {
        commit("deleteTodo", res.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetchTodos({ commit }) {
    todos
      .getTodos()
      .then(res => {
        commit("setTodos", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  createTodo({ commit }, data) {
    todos
      .addTodo(data)
      .then(res => {
        commit("addTodo", res.data);
        return res.data;
      })
      .catch(err => {
        throw err;
      });
  }
};

// mutations
const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  deleteTodo(state, todoId) {
    const newTodos = state.todos.filter(todo => todo._id != todoId);
    state.todos = newTodos;
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
