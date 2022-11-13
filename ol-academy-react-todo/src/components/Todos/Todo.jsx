import React from "react";
import styles from "./Todo.module.css";
import CustomButton from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import { IoIosCloudDone } from "react-icons/io";

import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(null);
    this.state = {
      todoEditMode: false,
      title: this.props.todoTitle,
      error: false,
    };
  }

  componentDidUpdate() {
    if (this.state.todoEditMode) {
      this.inputRef.current.focus();
    }
  }

  handleInputChange = (e) => this.setState({ title: e.target.value });

  handleStartEditMode = () => {
    if (!this.state.todoEditMode) {
      this.setState({ todoEditMode: true });
    }
  };

  handleCancelTodoAdding = () => {
    this.setState({
      title: this.props.todoTitle,
      todoEditMode: false,
      error: false,
    });
  };

  handleSubmitTodoUpdate = (e) => {
    e.preventDefault();
    if (this.state.title === this.props.todoTitle) {
      this.setState({
        error: true,
      });
      return;
    }

    const todoExists = this.props.allTodos.find(
      (td) => td.title === this.state.title
    );

    if (todoExists) {
      this.setState({ error: true });
      return;
    }

    this.setState({ error: false, todoEditMode: false });
    this.props.onTodoUpdate({
      newTitle: this.state.title,
      todoId: this.props.todoId,
    });
  };

  checkEditMode = () => !!this.state.todoEditMode;

  handleTodoReposition = (action) => {
    if (!this.checkEditMode()) {
      this.props.onTodoReposition(this.props.todoId, action);
    }
  };

  handleTodoComplete = () => {
    if (!this.checkEditMode()) {
      this.props.onTodoComplete(this.props.todoId);
    }
  };

  handleCheckboxChange = (e) =>
    this.props.onCheckboxChange(this.props.todoId, !!e.target.checked);

  render() {
    return (
      <li
        className={`${styles["list-item"]} ${
          this.props.completed ? styles.completed : ""
        }`}
      >
        {this.state.todoEditMode ? (
          <form className={styles.form} onSubmit={this.handleSubmitTodoUpdate}>
            <>
              <input
                type="text"
                className={styles["input"]}
                value={this.state.title}
                onChange={this.handleInputChange}
                ref={this.inputRef}
              />
              <div className={styles["update-section"]}>
                <div className={styles.controls}>
                  <button onClick={this.handleCancelTodoAdding} type="button">
                    Reset
                  </button>
                  <button className={styles["update-btn"]} type="submit">
                    Update
                  </button>
                </div>
              </div>
              {this.state.error ? (
                <small>Task with this title already exists</small>
              ) : null}
            </>
          </form>
        ) : (
          <div className={styles.todoText}>{this.props.todoTitle}</div>
        )}

        <div className={styles["icons-div"]}>
          <Checkbox
            listValue={this.props.todoTitle}
            onChange={this.handleCheckboxChange}
          />

          {/* update  */}
          <CustomButton
            disabled={this.props.completed}
            onClick={this.handleStartEditMode}
          >
            <AiFillEdit fill="orange" className={styles.icon} />{" "}
          </CustomButton>

          {/* delete */}
          <CustomButton
            onClick={() => this.props.onTodoDelete(this.props.todoId)}
          >
            <AiOutlineDelete fill="red" className={styles.icon} />
          </CustomButton>

          {/* complete */}
          <CustomButton
            disabled={this.props.completed}
            onClick={this.handleTodoComplete}
          >
            <IoIosCloudDone fill="green" className={styles.icon} />
          </CustomButton>

          <div className={styles["arrowicons-div"]}>
            <CustomButton onClick={() => this.handleTodoReposition("up")}>
              <AiOutlineArrowUp fill="green" className={styles.icon} />
            </CustomButton>
            <CustomButton onClick={() => this.handleTodoReposition("down")}>
              <AiOutlineArrowDown fill="green" className={styles.icon} />
            </CustomButton>
          </div>
        </div>
      </li>
    );
  }
}

export default Todo;