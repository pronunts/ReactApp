import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";
import image from "./giphy.gif";

function TodoForm() {
  const [descriptionValue, setDescriptionValue] = React.useState("");
  const [textValueTitle, setTextValueTitle] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  //*Funcion para el titulo del Todo
  const onSetValueTitle = (event) => {
    setTextValueTitle(event.target.value);
  };

  //*Funcion para la descripcion del Todo
  const onSetValue = (event) => {
    setDescriptionValue(event.target.value);
  };

  //*Cancelar el envio del formulario (cerrar el modal)
  const onCancel = () => {
    setOpenModal(false);
  };

  //*La accion de esta funcion consite en enviar el formulario y recargar la pagina
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(textValueTitle, descriptionValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label className="text-tutorial" name="name">
        Create New Task
      </label>
      <textarea
        className="title__text"
        placeholder="New Task"
        value={textValueTitle}
        onChange={onSetValueTitle}
      />
      <textarea
        className="description__text"
        placeholder="Write a description"
        value={descriptionValue}
        onChange={onSetValue}
      />
      <div className="container_Button">
        {/*    <button type="button" onClick={onCancel}>
          Cancelar
        </button> */}

        <button className="button-accept" type="submit">
          Add
        </button>
      </div>
      <img src={image} className="image-decoration"></img>
    </form>
  );
}

export { TodoForm };
