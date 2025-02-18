import { useState, useEffect } from "react";
import axios from "axios";
import { TODO_BASE_URL } from "../utils";

const useTodo = () => {
    const [todos, setTodos] = useState([]);
    console.log({ todos })
    useEffect(() => {

        const fetchTodos = async () => {

            const { data } = await axios.get(TODO_BASE_URL);

            const updatedTodos = data.todos.map(({ todo, completed, ...rest }) => ({
                title: `Title ${rest?.id}${rest?.userId}`,
                description: todo,
                status: "Pending",
                ...rest
            }));

            setTodos(updatedTodos);
        };

        fetchTodos();
    }, []);

    const addNewTodo = (newTodo) => {
        setTodos((prevTodos) => [newTodo, ...prevTodos]);
        axios.post(`${TODO_BASE_URL}/add`, newTodo);
    };

    const updateTodo = (id, newTodoValues) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, ...newTodoValues } : todo
            )
        );
        axios.put(`${TODO_BASE_URL}/${id}`, { ...newTodoValues });
    };

    const updateTodoStatus = (id, status) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, status } : todo
            )
        );
        axios.put(`${TODO_BASE_URL}/${id}`, { status });
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        axios.delete(`${TODO_BASE_URL}/${id}`);
    };

    return { todos, addNewTodo, updateTodo, updateTodoStatus, deleteTodo }
}

export default useTodo