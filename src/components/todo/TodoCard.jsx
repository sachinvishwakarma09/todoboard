import React, { useState } from "react";
import TodoForm from "./TodoForm";

const todoStatusColor = {
  "Pending": "#FFFFFF",
  "In Progress": "#f6ff70",
  "Completed": " #77ff7c"
}

const TodoCard = ({ todo, updateTodo, deleteTodo }) => {

  const [isEdit, setEdit] = useState(false)

  const handleDragStart = (e) => {
    e.dataTransfer.setData("todoId", todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const onTodoUpdate = (e, todoForm) => {
    updateTodo(todo?.id, todoForm)
    setEdit(false)
  }

  return (
    <>
      {isEdit ? <div className="todo-form-edit"><TodoForm todo={todo} onTodoSubmit={onTodoUpdate} /> </div> :
        <div
          className="todo-card"
          style={{ backgroundColor: todoStatusColor[todo?.status] }}
          draggable
          onDragStart={handleDragStart}
        >
          <h4>{todo?.title}</h4>
          <p>{todo?.description}</p>
          <button className="edit-btn" onClick={() => setEdit(true)}>
            Edit
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>}
    </>
  );
};

export default TodoCard;
