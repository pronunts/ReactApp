import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <h2 className="todoCounter">
        You have completed {completedTodos} of {totalTodos} Tasks
      </h2>
    </React.Fragment>
  );
}
export { TodoCounter };
