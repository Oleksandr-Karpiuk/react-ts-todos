import React from "react";
import AddTodoForm from "./Components/AddTodoForm";
import "./App.css";
import { addTodo } from "./Redux/todoSlice";
import TodoList from "./Components/TodoList";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={(text) => dispatch(addTodo(text))} />
      <TodoList />
    </div>
  );
}

export default App;