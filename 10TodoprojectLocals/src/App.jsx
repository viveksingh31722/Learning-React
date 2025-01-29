import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prevTodos) => [{id: Date.now(), ...todo}, ...prevTodos])
  }

  const updateTodo = (id, updateTodo) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => (prevTodo.id === id ? updateTodo : prevTodo)));
  }

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !==id));
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>  prevTodos.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo )))
  }

  // From here, the basic context functionality is done.

  /////////////////////////////////////////////////////////////////

  // Below we are working on local storage functionality.


   

  // Get the todos from local storage.
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos && todos.length > 0){
      setTodos(todos); // Set the todos to the state.
    }
  }, []);

  // save the todos to local storage.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
   },[todos]);

 


  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, removeTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id}
                className="w-full"
                >
                  <TodoItem todo = {todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
