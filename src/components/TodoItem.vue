<template>
  <div>
    <h3>{{todo.title}}</h3>
    <p>{{todo.description}}</p>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>
<script>
export default {
  props: { todo: { type: Object, required: true } },
  name: "TodoItem",
  methods: {
    deleteTodo() {
      this.$emit("delete", this.todo._id);
    }
  }
};
</script>
