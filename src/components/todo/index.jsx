import React from "react";
import TodoLane from "./TodoLane";
import TodoForm from "./TodoForm";
import useTodo from "./hooks/useTodo";
import { TODO_STATUSES } from "./utils";

const TodoContainer = () => {

  const { todos, addNewTodo, updateTodo, updateTodoStatus, deleteTodo } = useTodo()

  const onTodoSubmit = (e, todoForm) => {
    addNewTodo({ id: Date.now(), ...todoForm });
  };

  return (
    <div className="todo-container">
      <TodoForm onTodoSubmit={onTodoSubmit} />
      <div className="lanes-container">
        {TODO_STATUSES.map((status) => (
          <TodoLane
            key={status}
            status={status}
            todos={todos.filter((todo) => todo.status === status)}
            updateTodo={updateTodo}
            updateTodoStatus={updateTodoStatus}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
