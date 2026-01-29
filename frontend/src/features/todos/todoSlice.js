import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, input:"Learn Redux Toolkit", isCompleted:false}]
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {id:nanoid(), input: action.payload, isCompleted:false};
            state.todos.push(todo);
        },
        deleteTodo: (state,action) => {
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const { id, input } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.input = input;
            }
        },
        completeTodo : (state, action) => {
            const id = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.isCompleted = !existingTodo.isCompleted;
            }
        }
    }

});


export const { addTodo, deleteTodo, editTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;