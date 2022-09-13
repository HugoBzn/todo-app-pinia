<script setup>
import { ref } from "vue";
import { useTodosStore } from "./stores/todos";
import { storeToRefs } from "pinia";

const newTodo = ref("");

const todosStore = useTodosStore();

const { todos } = storeToRefs(todosStore);
const { addTodo } = useTodosStore();

const addNewTodo = (text) => {
  addTodo(text);
  newTodo.value = "";
};
</script>

<template>
  <main>
    <div>
      <input v-model="newTodo" />
      <button @click="() => addNewTodo(newTodo)">Add</button>
      <div v-for="todo in todos" :key="todo.id">
        <h1>{{ todo.text }}</h1>
        <button>Toggle</button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
