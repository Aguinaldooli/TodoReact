import React, { useState } from "react";

// O componente EditTodoForm é responsável por permitir a edição de uma tarefa.
// Ele recebe duas propriedades (props) do componente pai: 'editTodo' e 'task'.
export const EditTodoForm = ({ editTodo, task }) => {
// useState para ver o estado do componente.
// variável value para armazenar o valor da tarefa.
// O valor inicial é definido como 'task.task', que é o conteúdo da tarefa a ser editada.
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        // O evento 'onChange' é usado para atualizar o estado 'value' conforme o usuário digita.
        // Isso garante que o campo de entrada mostre o valor correto.
        placeholder="Atualize a tarefa"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Atualizar{" "}
      </button>
    </form>
  );
};
