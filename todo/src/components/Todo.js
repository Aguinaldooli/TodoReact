import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// O componente Todo representa uma tarefa na lista de tarefas.
// Ele recebe quatro propriedades (props) do componente pai:
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
      // Quando o parágrafo é clicado, a função 'toggleComplete' é chamada com o ID da tarefa.
      // A classe CSS "completed" é aplicada se a tarefa estiver marcada como completa, senão, é "incompleted".
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : "incompleted"}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
