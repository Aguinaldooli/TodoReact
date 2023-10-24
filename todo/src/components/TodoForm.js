import React, { useState } from "react";

//Esse componente é um formulário para adicionar uma nova
//tarefa à lista de afazeres.

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="O que precisa ser feito hoje?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Adicionar Tarefa{" "}
      </button>
    </form>
  );
};
