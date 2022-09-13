<script setup>
import { ref } from "vue";
import { useTodosStore } from "./stores/todos";
import { storeToRefs } from "pinia";

const newTodo = ref("");

const todosStore = useTodosStore();

const { todos } = storeToRefs(todosStore);
const { addTodo, toggleTodo } = useTodosStore();

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
        <h1 :style="todo.isFinished && { textDecoration: 'line-through' }">
          {{ todo.text }}
        </h1>
        <button @click="() => toggleTodo(todo.id)">Toggle</button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
