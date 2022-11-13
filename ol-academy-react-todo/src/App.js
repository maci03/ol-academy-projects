import React from "react";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
import TodosContorls from "./components/TodosControls/TodosControls";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  handleAddTodo = (newTodo) =>
    this.setState({ todos: [...this.state.todos, newTodo] });

  findTodo = (todoId) => this.state.todos.find((td) => td.id === todoId);

  handleSingleTodoDelete = (todoId) => {
    const desiredTodo = this.findTodo(todoId);
    if (!desiredTodo) return;

    const filteredTodos = this.state.todos.filter((td) => td.id !== todoId);
    this.setState({ todos: filteredTodos });
  };

  handleSingleTodoComplete = (todoId) => {
    const desiredTodo = this.findTodo(todoId);
    if (!desiredTodo) return;

    const updatedTodo = { ...desiredTodo, isCompleted: true };
    const updatedTodos = [...this.state.todos];

    const desiredTodoIndex = updatedTodos.findIndex((td) => td.id === todoId);
    updatedTodos[desiredTodoIndex] = updatedTodo;

    this.setState({ todos: updatedTodos });
  };

  handleTodoReposition = (todoId, action) => {
    if (!todoId || !(action === "up" || action === "down")) return;
    if (this.state.todos.length === 1) return;

    if (action === "down" && this.state.todos.at(-1).id === todoId) return;
    if (action === "up" && this.state.todos[0].id === todoId) return;

    const desiredTodo = this.findTodo(todoId);
    if (!desiredTodo) return;

    const updatedTodos = [...this.state.todos];
    const todoIndex = updatedTodos.findIndex((td) => td.id === todoId);
    let previousTodo;

    if (action === "up") {
      previousTodo = updatedTodos[todoIndex - 1];
      updatedTodos[todoIndex - 1] = desiredTodo;
    } else {
      previousTodo = updatedTodos[todoIndex + 1];
      updatedTodos[todoIndex + 1] = desiredTodo;
    }

    updatedTodos[todoIndex] = previousTodo;
    this.setState({ todos: updatedTodos });
  };

  handleSingleTodoUpdate = (newTodoData) => {
    const updatedTodos = [...this.state.todos];
    const desiredTodo = updatedTodos.find((td) => td.id === newTodoData.todoId);
    const updatedTodo = { ...desiredTodo, title: newTodoData.newTitle };
    const desiredTodoIndex = updatedTodos.findIndex(
      (td) => td.id === newTodoData.todoId
    );

    updatedTodos[desiredTodoIndex] = updatedTodo;
    this.setState({ todos: updatedTodos });
  };

  handleDeleteCompletedTodos = () => {
    const uncompletedTodos = this.state.todos.filter((td) => !td.isCompleted);
    if (uncompletedTodos.length === this.state.todos.length) return;
    this.setState({ todos: uncompletedTodos });
  };

  handleCheckStatusChange = (todoId, checkStatus) => {
    const desiredTodo = this.findTodo(todoId);
    if (!desiredTodo) return;

    const updatedTodo = { ...desiredTodo, isChecked: !!checkStatus };
    const updatedTodos = [...this.state.todos];

    const desiredTodoIndex = updatedTodos.findIndex((td) => td.id === todoId);
    updatedTodos[desiredTodoIndex] = updatedTodo;

    this.setState({ todos: updatedTodos });
  };

  handleDeleteCheckedTodos = () => {
    const uncheckedTodos = this.state.todos.filter((td) => !td.isChecked);
    if (uncheckedTodos.length === this.state.todos.length) return;
    this.setState({ todos: uncheckedTodos });
  };

  render() {
    // console.log("this.state (parent)", this.state);
    return (
      <div className="App">
        <Form todos={this.state.todos} onAddTodo={this.handleAddTodo} />
        {this.state.todos.length > 0 ? (
          <>
            <TodosContorls
              onDeleteAllTodos={() => this.setState({ todos: [] })}
              onDeleteCompletedTodos={this.handleDeleteCompletedTodos}
              onDeleteCheckedTodos={this.handleDeleteCheckedTodos}
            />
            <Todos
              todos={this.state.todos}
              onTodoDelete={this.handleSingleTodoDelete}
              onSetTodoComplete={this.handleSingleTodoComplete}
              onTodoReposition={this.handleTodoReposition}
              onTodoUpdate={this.handleSingleTodoUpdate}
              onCheckboxChange={this.handleCheckStatusChange}
            />
          </>
        ) : null}
      </div>
    );
  }
}

export default App;