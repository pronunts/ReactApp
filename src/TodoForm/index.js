import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css'
function TodoForm(){
    const [textValue, setTextValue] = React.useState('')
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onSetValue = (event)=>{
        setTextValue(event.target.value)
    }
    const onCancel = () =>{
        setOpenModal(false);

    };

    //*La accion de esta funcion consite en recargar la pagina
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(textValue)
        setOpenModal(false);

    };
    
    return(
    <form onSubmit={onSubmit}>
        <label name='name'>Escribe tu nuevo TODO</label>
        <textarea
        
        placeholder= "Tareas"
        value={textValue}
            onChange={onSetValue}
        />
        <div className='container_Button'>
            <button
            type='button'
            onClick={onCancel}>
            Cancelar
            </button>

            <button
           
            type='submit'
            >
            Añadir
            </button>
        </div>
    </form>
    )
}

export { TodoForm }