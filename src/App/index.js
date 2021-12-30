import React from 'react'
// import './App.css';
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext'

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'Completar curso', completed: false },
//   { text: 'LLorar con la llorona', completed: false }
// ]
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
