<template>
  <div id="ArtistList">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a band </label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="New Band to add"
      />
      <button>Add</button>
    </form>
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
</template>

<!-- js stuff -->
<script>
export default {
  name: "ArtistList",
  data: function() {
    return {
      newTodoText: "",
      todos: [],
      nextTodoId: 4
    };
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = "";
    }
  }
};
</script>
