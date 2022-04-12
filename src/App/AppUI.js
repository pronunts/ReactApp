import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ModalInfo } from "../ModalInfo";
import { TodoInformation } from "../TodoInformation";

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    openModalInformation,
    setOpenModalInformation,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {searchedTodos.map((todos) => (
          <TodoItem
            key={todos.title}
            title={todos.title}
            completed={todos.completed}
            onComplete={() => completeTodo(todos.title)}
            onDelete={() => deleteTodo(todos.title)}
            setOpenModalInformation={setOpenModalInformation}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      {!!openModalInformation && (
        <ModalInfo>
          <TodoInformation
            title={searchedTodos[1].title}
            description={searchedTodos[1].description}
            setOpenModalInformation={setOpenModalInformation}
          />
        </ModalInfo>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
