import React, { useState } from 'react';
import Form from './components/Form/Form';
import Todos from './components/Todo/Todos';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  
  const handleAddTodo = (newTodo) => {
    setTodos((oldTodos => [...oldTodos, newTodo]))
  }

  return (
      <div className="App">
        <Form todos={todos} onAddTodo={handleAddTodo} />
        <Form todos={todos} onAddTodo={handleAddTodo} />
        <Todos todos={todos} />
      </div>
  )
}

export default App;