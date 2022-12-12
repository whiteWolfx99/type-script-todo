import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    todos: [
      {
        id: 1,
        text: "Learn React",
        completed: false,
        selected: false,
      },
      {
        id: 2,
        text: "Learn Redux",
        completed: false,
        selected: false,
      },
    ],
  },
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completedTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
    selectTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            selected: !todo.selected,
          };
        }
        return todo;
      });
    },
    deleteselectedTodo: (state) => {
      state.todos = state.todos.filter((todo) => todo.selected === false);
    },
  },
});

export const {
  addTodos,
  deleteTodo,
  completedTodo,
  selectTodo,
  deleteselectedTodo,
} = TodoSlice.actions;

export default TodoSlice.reducer;
