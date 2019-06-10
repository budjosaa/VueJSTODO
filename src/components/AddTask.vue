<template>
  <div>
    <table>
      <th>Title:</th>
      <tr>
        <input type="text" v-model="title">
      </tr>
      <th>Description:</th>
      <tr>
        <input type="text" v-model="description">
      </tr>
      <tr>
        <button v-on:click="addTask(title,description)">Add task!</button>
      </tr>
    </table>
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
    addTask: async function(title, description) {
      await this.$store.dispatch("todos/createTodo", {
        title: title,
        description: description
      });
      this.$router.push("/todos");
    }
  }
};
</script>
