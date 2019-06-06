import Axios from "axios";

const axios = require("axios");
class TodoService {
  constructor() {
    Axios.defaults.baseURL = "http://localhost:3000/api";
  }

  addTodo(todo) {
    return axios.post("/todos/", todo);
  }
  getTodos() {
    return axios.get("/todos/");
  }
  removeTodo(todoId) {
    return axios.delete(`/todos/${todoId}`);
  }
  updateTodo(todoId) {
    return axios.put(`/todos/${todoId}`);
  }
}
export default new TodoService();
