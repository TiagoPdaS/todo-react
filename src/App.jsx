import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "EStudar React",
      category: "Trabalho",
      isCompleted: "false",
    },
    {
      id: 2,
      text: "Ir para a Academia",
      category: "Pessoal",
      isCompleted: "false",
    },
    {
      id: 3,
      text: "Criar app To-Do",
      category: "Trabalho",
      isCompleted: "false",
    },
    {
      id: 4,
      text: "EStudar Ingles",
      category: "Pessoal",
      isCompleted: "false",
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
