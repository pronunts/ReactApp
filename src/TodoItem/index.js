import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onClickButtonInfo = (callback) => {
    props.setOpenModalInformation((prevState) => !prevState);
    props.onSelectItem(props.title);
  };
  return (
    <li className="TodoItem">
      <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      ></span>
      <p
        onClick={onClickButtonInfo}
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.title}
      </p>
      <span onClick={props.onDelete} className="Icon Icon-delete"></span>
    </li>
  );
}
export { TodoItem };
