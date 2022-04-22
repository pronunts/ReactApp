import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext/index.js";

//* Custom React hooks (useState)

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
