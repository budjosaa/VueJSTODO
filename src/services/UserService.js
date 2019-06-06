import Axios from "axios";

const axios = require("axios");
class UserService {
  constructor() {
    Axios.defaults.baseURL = "http://localhost:3000/api";
    Axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
      "token"
    )}`;
  }
  async login(email, password) {
    try {
      const result = await axios.post("/auth/login ", {
        email,
        password
      });
      localStorage.setItem("token", result.data.token);
      Axios.defaults.headers.common["Authorization"] = `${result.data.token}`;
    } catch (err) {
      throw err;
    }
  }
  async register(email, password, username) {
    try {
      const result = await axios.post("/auth/register", {
        email,
        password,
        username
      });
      localStorage.setItem("token", result.data.token);
      Axios.defaults.headers.common["Authorization"] = `${result.data.token}`;
    } catch (err) {
      throw err;
    }
  }
  logout() {
    localStorage.removeItem("token");
  }
  isLoggedIn() {
    return !!localStorage.getItem("token");
  }
}
export default new UserService();
