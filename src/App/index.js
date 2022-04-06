import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext/index.js';
/* const defaultTodos = [{
        text: 'Entorno de desarrollo Completo.',
        completed: false
    },
    {
        text: 'Realzar la interfaz',
        completed: true
    },
    {
        text: 'Aplicar hooks',
        completed: false
    },
    {
        text: 'React Context',
        completed: false
    },
] */
//* Custom React hooks (useState)


function App() {
  
return (
    <TodoProvider>
        <AppUI/>
    </TodoProvider>
    );
}

export default App;
