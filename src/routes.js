import LogIn from "./components/LogIn";
import Register from "./components/Register";
import ListOfTodos from "./components/ListOfTodos";
const routes = [
  {
    path: "/login",
    component: LogIn,
    name: "login",
    meta: {
      guest: true
    }
  },
  {
    path: "/register",
    component: Register,
    name: "register",
    meta: {
      guest: true
    }
  },

  {
    path: "/todos",
    component: ListOfTodos,
    name: "todos"
  }
];
export default routes;
