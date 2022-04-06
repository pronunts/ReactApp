import React from 'react';

function AddTodo(props){
    return(
<React.Fragment>
    <input
        className='createTodo' 
        placeholder='Todo'
        value={props.input}
    />

</React.Fragment>
);
}
export {AddTodo}