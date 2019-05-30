// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';


function TodoList(props){
    return (
        <div>
            {
                props.List.map(ListFromMap => (
                    // <p>{ListFromMap.task}</p>
                    <Todo key={ListFromMap.id} loop={ListFromMap}/>
                ))
            }

        </div>
    );
}

export default TodoList;