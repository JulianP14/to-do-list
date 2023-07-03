'use client'
import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                task: todo,
                completed: false,
                isEditing: false,
            },
        ]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    return (
        <div className="TodoWrapper">
            <h1>Things to do!</h1>
            <TodoForm addTodo={addTodo} />
            {/* display todos */}
            {todos.map((todo, index) =>
                todo.isEditing ? (
                    <EditTodoForm
                        editTodo={editTask}
                        task={todo}
                        key={index}
                    />
                ) : (
                    <Todo
                        key={index}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    );
};

export default TodoWrapper;
