import LogIn from "./components/LogIn";
import Register from "./components/Register";
import ListOfTodos from "./components/ListOfTodos";
import AddTask from "./components/AddTask";
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
  },
  {
    path: "/addtask",
    component: AddTask,
    name: "addtask"
  }
];
export default routes;
