import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import "./App.css";

const App = () => {
  const initialTodos = [
    { id: 1, title: "Estudar React", checked: false },
    { id: 2, title: "Estudar Inglês", checked: true },
    { id: 3, title: "Tocar Guitarra", checked: false },
  ];

  const [todos] = useState(initialTodos);
  const [value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    console.log("submit", value);
    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      submit();
    } else if (event.key === "Escape") {
      erase();
    }
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <input
          className="new-todo"
          placeholder="o que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span className="todo">{todo.title}</span>
              <button type="button" className="remove">
                <MdDelete size={28}> </MdDelete>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
export default App;
