import React from "react";
import styles from "./TodosContorls.module.css";
import Button from "../Button/Button";

class TodosContorls extends React.Component {
  render() {
    return (
      <div className={styles.controls}>
        <Button variant="danger" onClick={this.props.onDeleteAllTodos}>
          Delete all todos
        </Button>
        <Button variant="success" onClick={this.props.onDeleteCompletedTodos}>
          Delete completed todos
        </Button>
        <Button variant="primary" onClick={this.props.onDeleteCheckedTodos}>
          Delete checked todos
        </Button>
      </div>
    );
  }
}

export default TodosContorls;