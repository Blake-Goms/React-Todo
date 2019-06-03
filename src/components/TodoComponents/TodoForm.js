
import React from 'react';
import './Todo.css';

const TodoForm = props => {
return (
<form onSubmit={props.addTask} className='form'>
    <input
    type="text"
    value={props.name}
    name="name"
    onChange={props.handleChanges}
    placeholder="Enter Task"
    />
    <div>
    <button type="submit" >Add Task</button>
    <button type="button" onClick={props.Clear}>Clear Finish Tasks</button>
    </div>
</form>
);
};

export default TodoForm;