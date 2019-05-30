import React from 'react';
//use props for functional components. .this for classes
//cant use .state for functional 

    const TodoForm = props => {
        return (
        <form onSubmit={(e) => props.handleChanges(e)} name='task'>       
            <input onChange={props.onInputChange}
            placeholder="Type here"
            value={props.identity}
            />
            <input type='submit' value={props.value}  />
            <button>Clear List</button>
        </form>
        );
    };

export default TodoForm;