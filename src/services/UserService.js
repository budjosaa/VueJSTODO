import Axios from "axios";
const axios = require("axios");

class UserService {
  constructor() {
    Axios.defaults.baseURL = "http://localhost:3000/api";
    Axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
      "token"
    )}`;
  }
  setAuthorization(token) {
    localStorage.setItem("token", token);
    Axios.defaults.headers.common["Authorization"] = `${token}`;
  }
  async login(email, password) {
    try {
      const result = await axios.post("/auth/login ", {
        email,
        password
      });
      this.setAuthorization(result.data.token);
      return result.data;
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
      this.setAuthorization(result.data.token);
      return result.data;
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
  async fetchUserData() {
    try {
      const result = await axios.get("auth/me");
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }
}
export default new UserService();
