import React from "react";
import "./TodoInformation.css";

function TodoInformation(props) {
  const onClickButtonInfo = () => {
    props.setOpenModalInformation((prevState) => !prevState);
  };
  return (
    <div className="info-container">
      <h2 className="title">Title: {props.title}</h2>
      <p className="description">Description: {props.description}</p>
      <span className="exit-modal" onClick={onClickButtonInfo}></span>
    </div>
  );
}
export { TodoInformation };
