import React, { useState } from 'react';

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todoExists = props.todos.find(td => td.title === title);
    if (todoExists) {
      setError(true)
      return;
    }
    const newTodo = {
      id: props.todos.length + 1,
      title
    }
    setError(false);
    props.onAddTodo(newTodo);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} />
      {error && <small>დავალება ამ სახელობით არსებობს</small>}
      <button type="submit">დამატება</button>
    </form>
  )
}

export default Form;