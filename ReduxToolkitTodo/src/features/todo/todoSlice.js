import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   todos: [
    { 
      id: 1,
      text: "Hello World", 
    }  
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: { 

    // Here we can see that most of the things are like "Context Api", but i context api we are just putting the empty functions as context, but in redux, we can define the function here, got two things, (State and action).

    addTodo: (state, action) => {  // In reducers we use "key : function " pair.
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },

    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) =>  todo.id !== id )
    },

    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
    }


  }
})
// Exporting the actions to be used in components individually
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
 
//Exporting the reducer to be used in the store configuration
export default todoSlice.reducer;