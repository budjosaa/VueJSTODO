<template>
  <div>
    <p>Title:</p>
    <input type="text" v-model="title">
    <br>
    <p>Description:</p>
    <input type="text" v-model="description">
    <br>
    <button @click="addTask">Add task!</button>
  </div>
</template>
<script>
import { async } from "q";
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    async addTask() {
      await this.$store.dispatch("todos/createTodo", {
        title: this.title,
        description: this.description
      });
      this.$router.push({ name: "todos" });
    }
  }
};
</script>
