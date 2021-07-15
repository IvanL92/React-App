import React from 'react';
// import { TodoItem } from './TodoItem';

export function TodoList({ todos }) {
    return (
        <ul className="tarea">
            <li>Tarea 1</li>
            <li>Tarea 2</li>
            <li>Tarea 3</li>
            <li>Tarea 4</li>
            <li>Tarea 5</li>

            {/* {todos.map((todo) => (
                <TodoItem todo={todo} />
            ))} */}
        </ul>
        );
    }
    