import React from "react";
import Todo from "./Todo";
import styles from "./Todos.module.css";

class Todos extends React.Component {
  render() {
    return (
      <ul className={styles.todosList}>
        {this.props.todos.map((item) => (
          <Todo
            key={item.id}
            todoId={item.id}
            todoTitle={item.title}
            allTodos={this.props.todos}
            onCheckboxChange={this.props.onCheckboxChange}
            completed={item.isCompleted}
            onTodoDelete={this.props.onTodoDelete}
            onTodoEdit={this.props.onTodoEdit}
            onTodoComplete={this.props.onSetTodoComplete}
            onTodoReposition={this.props.onTodoReposition}
            onTodoUpdate={this.props.onTodoUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default Todos;