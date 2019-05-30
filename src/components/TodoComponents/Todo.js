    
import React from 'react';
import './Todo.css';

function List(props) {
return (
    <div className={`list-info${props.task.completed ? ' completed' : ''}`}>
    <div >
        <div>
        <input type="radio" onClick={() => props.toggleTask(props.task.id)} />
        <h3>{props.task.task}</h3>
        </div>
    </div>
    </div>
);
}

export default List;