import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 1,
        text: "Clean room",
        isFinished: false,
      },
    ],
  }),
});
