import React from "react";
import "./TodoInformation.css";

function TodoInformation(props) {
  const onClickButtonInfo = () => {
    props.setOpenModalInformation((prevState) => !prevState);
  };
  return (
    <div className="info-container">
      <h2 className="title">Title: {props.title}</h2>
      <p className="date">Date: 23/23/23 </p>

      <div className="description_container">
        <p className="description">Description: </p>
        <p className="text_description">{props.description}</p>
      </div>

      <span className="exit-modal" onClick={onClickButtonInfo}></span>
    </div>
  );
}
export { TodoInformation };
