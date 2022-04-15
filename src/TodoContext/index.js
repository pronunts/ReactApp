import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalInformation, setOpenModalInformation] = React.useState(false);
  let [selectTodo, setSelectTodo] = React.useState(0);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState("");

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todofiltered) => {
      const todoText = todofiltered.title.toLowerCase();
      const todoSearchValue = searchValue.toLowerCase();
      return todoText.includes(todoSearchValue);
    });
  }
  let todo = [...todos];
  const selectItem = (title) => {
    const indexItem = todos.findIndex((todo) => todo.title === title);
    setSelectTodo(indexItem);
  };

  const completeTodo = (title) => {
    const indexText = todos.findIndex((todo) => todo.title === title);
    const newTodosArray = [...todos];
    newTodosArray[indexText].completed = true;
    saveTodos(newTodosArray);
  };
  const deleteTodo = (title) => {
    const indexText = todos.findIndex((todo) => todo.title === title);
    const newTodosArray = [...todos];
    newTodosArray.splice(indexText, 1);

    saveTodos(newTodosArray);
  };
  const addTodo = (title, description) => {
    const newTodos = [...todos];
    newTodos.push({
      complete: false,
      title,
      description,
    });
    saveTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoContext.Provider
        value={{
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          addTodo,
          saveTodos,
          openModal,
          setOpenModal,
          openModalInformation,
          setOpenModalInformation,
          selectTodo,
          setSelectTodo,
          selectItem,
          todo,
        }}
      >
        {props.children}
      </TodoContext.Provider>
    </React.Fragment>
  );
}
<TodoContext.Consumer></TodoContext.Consumer>;

export { TodoContext, TodoProvider };
