import { useState } from "react";
import "./App.css";


function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text:"EStudar React",
            category: "Trabalho",
            isCompleted:"false",
        },
        {
            id: 2,
            text:"Ir para a Academia",
            category: "Pessoal",
            isCompleted:"false",
        },
        {
            id: 3,
            text:"Criar app To-Do",
            category: "Trabalho",
            isCompleted:"false",
        },
        {
            id: 4,
            text:"EStudar Ingles",
            category: "Pessoal",
            isCompleted:"false",
        },
    ])
 return <div className="app">

<h1>Lista de Tarefas</h1>
<div className="todo-list">
    {todos.map((todo) => (
        <div className="todo">
            <div className="constent">
                <p>{todo.text}</p>
                <p className="category"> ({todo.category})</p>
            </div>

            <div>
                <button>Completar</button>
                <button>X</button>
            </div>

        </div>
    ))}
</div>

 </div>;
}

export default App;
