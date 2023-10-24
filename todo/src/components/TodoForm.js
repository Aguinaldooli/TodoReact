import React, { useState } from "react";

// Este componente é um formulário para adicionar uma nova tarefa à lista de afazeres.
// O componente recebe uma propriedade 'addTodo', que é uma função para adicionar uma nova tarefa à lista.

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
     // A função 'handleSubmit' é chamada quando o formulário é enviado.
    // Ela previne o comportamento padrão de recarregar a página.
    // Em seguida, chama a função 'addTodo' para adicionar a nova tarefa com o valor inserido.
    // Por fim, limpa o campo de entrada definindo 'value' como uma string vazia.
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
        // O evento 'onChange' é usado para atualizar o estado 'value' conforme o usuário digita.
        // Isso garante que o campo de entrada mostre o valor correto.
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Adicionar Tarefa{" "}
      </button>
    </form>
  );
};
