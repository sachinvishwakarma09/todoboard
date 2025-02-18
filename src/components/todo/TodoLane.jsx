import React from "react";
import TodoCard from "./TodoCard";

const TodoLane = ({ status, todos, updateTodo, updateTodoStatus, deleteTodo }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const todoId = e.dataTransfer.getData("todoId");
    updateTodoStatus(parseInt(todoId), status);
  };

  return (
    <div
      className="todo-lane"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h3>{status}</h3>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoLane;
