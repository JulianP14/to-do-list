'use client'
import { useState } from "react"

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value) {
            addTodo(value); 
            setValue('');
        }   
    };

    


    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type='text' placeholder='What do you need to do?' value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" />
            <button type='submit' className="todo-btn">Add Task</button>
        </form>
    )
}

export default TodoForm


