import React, {Fragment, useState} from 'react';
import {TodoList} from './components/TodoList.jsx';


export function App() {
    const [todos] = useState ([
        {id: 1, task: 'Tarea 1', completed: false}
    ]);
    return (
    <Fragment>
         <TodoList todos= {todos} />
         {/* <input type="text" placeholder="Nueva Tarea"></input> */}
         {/* <button>Agregar</button>
         <button>Eliminar</button> */}
    </Fragment> );
}