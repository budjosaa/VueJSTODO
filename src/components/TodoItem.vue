<template>
  <div>
    <h3>{{todo.title}}</h3>
    <p>{{todo.description}}</p>
    <button v-on:click="deleteTodo">Delete</button>
  </div>
</template>
<script>
export default {
  props: { todo: { type: Object, required: true } },
  name: "TodoItem",
  methods: {
    async deleteTodo() {
      try {
        await this.$store.dispatch("todos/removeTodo", this.todo._id);
      } catch (err) {
        console.log("nesto ne valja");
      }
    }
  }
};
</script>
