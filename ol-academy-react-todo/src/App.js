import React from 'react';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  // {
  //   todos: [
  //     { id: 1, title: "TitleTitle"}, 
  //     { id: 2, title: "jdhjshdjs hjkkj"},
  //     { id: 3, title: "gf hghg hg"}
  //   ]
  // }

  handleAddTodo = (newTodo) => this.setState({todos: [...this.state.todos, newTodo] });

  render() {
  console.log('this.state (parent)', this.state)
    return (
      <div className="App">
        <Form todos={this.state.todos} onAddTodo={this.handleAddTodo} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
