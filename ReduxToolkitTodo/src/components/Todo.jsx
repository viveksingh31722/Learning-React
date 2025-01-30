import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center px-4 py-2 rounded ${
              editingTodoId === todo.id ? 'bg-zinc-700' : 'bg-zinc-800'
            }`}
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              // Edit Mode
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="text-black px-2 py-1 rounded w-full"
                />
                <button
                  onClick={() => {
                    dispatch(updateTodo({ id: todo.id, newText: editingText }));
                    setEditingTodoId(null);
                  }}
                  className="text-white bg-green-500 border-0 py-1 px-2 focus:outline-none hover:bg-green-600 rounded ml-2"
                  disabled={!editingText.trim()}
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingTodoId(null)}
                  className="text-white bg-gray-500 border-0 py-1 px-2 focus:outline-none hover:bg-gray-600 rounded ml-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              // Display Mode
              <>
                <div className="text-white">{todo.text}</div>
                <div className="flex items-center">
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setEditingTodoId(todo.id);
                      setEditingText(todo.text);
                    }}
                    className="text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded ml-2"
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
