import React from "react";
import styles from "./TextInput.module.css";

class TextInput extends React.Component {
  constructor() {
    super();
    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    this.textInputRef.current.focus();
  }

  render() {
    return (
      <div className={styles["input-box"]}>
        <input
          className={`${styles.input} ${
            this.props.error ? styles.redInputBorder : ""
          }`}
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
          placeholder={"type todo..."}
          ref={this.textInputRef}
        />
        {this.props.error ? (
          <small className={styles.error}>დავალება ამ სახელით არსებობს</small>
        ) : (
          ""
        )}
        <div className={styles.controls}>
          <button
            className={styles.cancelTdBtn}
            type="button"
            onClick={this.props.onCancelTodoAdding}
          >
            Cancel
          </button>
          <button
            className={styles.addTodoBtn}
            type={this.props.submitButtonType || "button"}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default TextInput;