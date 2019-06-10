<template>
  <div>
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <button v-on:click="deleteTodo">Delete</button>
  </div>
</template>
<script>
export default {
  props: ["title", "description", "todoId"],
  name: "TodoItem",
  methods: {
    deleteTodo: async function() {
      await this.$store.dispatch("todos/removeTodo", this.todoId);
    }
  }
};
</script>
