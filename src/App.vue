<script setup>
import { useTodosStore } from "./stores/todos";

const { todos } = useTodosStore();
</script>

<template>
  <main>
    <input type="text" />
    <button>Add</button>

    <div v-for="todo in todos" :key="todo.id">
      <h1>{{ todo.text }}</h1>
      <button>Toggle</button>
    </div>
  </main>
</template>

<style scoped></style>
