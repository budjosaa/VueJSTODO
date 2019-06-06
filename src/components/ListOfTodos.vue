<template>
  <div>
    <h3 v-for="(todo,index) in allTodos" v-bind:key="index">{{todo.title}}</h3>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ListOfTodos",

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
