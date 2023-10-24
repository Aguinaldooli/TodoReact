import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();


// O componente TodoWrapper é o componente principal que contém a lista de tarefas.
export const TodoWrapper = () => {
  // useState é usado para gerenciar o estado dos todos (tarefas).
  // Inicialmente, a lista de tarefas é vazia.
  const [todos, setTodos] = useState([]);
   // cria um novo objeto de tarefa com um ID único e outras informações e adiciona à lista.
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  // toggleComplete é usada para marcar ou desmarcar uma tarefa como completa.
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      // essa linha de código é usada para alternar o estado da propriedade isEditing de uma tarefa. 
      //Se a tarefa atual possui o id correspondente ao id passado como argumento,
      // a propriedade isEditing será alternada, caso contrário, o objeto todo permanecerá inalterado.
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...Todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Lista de Tarefas!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          // Se 'isEditing' for verdadeiro, exibe o formulário de edição.
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
