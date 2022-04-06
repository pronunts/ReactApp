
import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
        }= React.useContext(TodoContext)

    return (
<React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

            <TodoList>
            {
                searchedTodos.map((todos) => (
                <TodoItem
                key={todos.text}
                text={todos.text}
                completed = {todos.completed}
                onComplete ={() => completeTodo(todos.text)}
                onDelete = {() => deleteTodo(todos.text)}
                />
            ))
            }   
            </TodoList>
        {!!openModal&&(
            <Modal>
                <TodoForm/>
            </Modal>
        )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

</React.Fragment>
);
}

export {
    AppUI
};