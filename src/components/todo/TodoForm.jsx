import React, { useEffect, useState } from "react";
import { TODO_INITIAL_VALUES } from "./utils";

const TodoForm = ({ todo = null, onTodoSubmit }) => {

    const [todoForm, setTodoForm] = useState(TODO_INITIAL_VALUES)

    const onChangeHandler = (e) => {
        setTodoForm(prevFormValue => ({ ...prevFormValue, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onTodoSubmit(e, todoForm)

        setTodoForm(TODO_INITIAL_VALUES)
    };

    useEffect(() => {
        if (todo?.id)
            setTodoForm(todo)
    }, [])

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <h3>{todo?.id ? 'Update' : 'Add New Todo'} </h3>
            <input
                type="text"
                name='title'
                placeholder="Title"
                value={todoForm?.title}
                onChange={onChangeHandler}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={todoForm?.description}
                onChange={onChangeHandler}
                required
            />
            <select name="status" value={todoForm?.status} onChange={onChangeHandler}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit">{todo?.id ? 'Save' : 'Add Todo'}</button>
        </form>
    );
};

export default TodoForm;
