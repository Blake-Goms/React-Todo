import React from 'react'
import TodoList from './TodoList';

function Todo(props){
    return (
        <p>{props.loop.task}</p>
    )
}

export default Todo;