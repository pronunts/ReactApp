import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider(props){
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const [searchValue, setSearchValue] = React.useState('');

    let searchedTodos= [];

    if(!searchValue.length >= 1){
        searchedTodos = todos;
    } else{
        searchedTodos = todos.filter(todofiltered =>{
            const todoText = todofiltered.text.toLowerCase();
            const todoSearchValue = searchValue.toLowerCase();
            return todoText.includes(todoSearchValue)
        })
    }


    const completeTodo = (text) =>{
        const indexText = todos.findIndex((todo) => todo.text === text);
        const newTodosArray = [...todos];
        newTodosArray[indexText].completed= true;
        saveTodos(newTodosArray);
    }
    const deleteTodo= (text)=>{
        const indexText = todos.findIndex((todo) => todo.text === text);
        const newTodosArray = [...todos];
        newTodosArray.splice(indexText, 1);
        
        saveTodos(newTodosArray);
    }
    const addTodo= (text) =>{
        const newTodos = [...todos];
        newTodos.push({
            complete:false,
            text
    });
    saveTodos(newTodos);
};

            return(
                <React.Fragment>

                <TodoContext.Provider value={{
                    totalTodos,
                    completedTodos,
                    searchValue,
                    setSearchValue ,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                    addTodo,
                    saveTodos,
                    openModal,
                    setOpenModal,
                }}>
                    {props.children}
                </TodoContext.Provider>


                </React.Fragment>
            );
}
<TodoContext.Consumer></TodoContext.Consumer>

export{TodoContext, TodoProvider}