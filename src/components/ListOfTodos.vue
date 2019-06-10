<template>
  <div>
    <div v-for="(todo,index) in allTodos" v-bind:key="index">
      <TodoItem :title="todo.title" :description="todo.description" :todoId="todo._id"/>
    </div>
    <router-link to="/addtask">Add Task!</router-link>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";
import { mapGetters } from "vuex";

export default {
  name: "ListOfTodos",
  components: {
    TodoItem
  },

  computed: {
    ...mapGetters("todos", {
      allTodos: "getAllTodos"
    })
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.$store.dispatch("todos/fetchTodos"));
  }
};
</script>
