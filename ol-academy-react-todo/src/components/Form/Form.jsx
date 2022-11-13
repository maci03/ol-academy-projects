import React from "react";
import TextInput from "../TextInput/TextInput";
import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      error: false,
    };
  }

  handleChange = (e) => this.setState({ title: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("this.state (child)", this.state);

    const todoExists = this.props.todos.find(
      (td) => td.title === this.state.title
    );

    if (todoExists) {
      this.setState({ error: true });
      return;
    }

    const newTodo = {
      id: Math.random(),
      title: this.state.title,
      isCompleted: false,
      isChecked: false,
    };

    this.setState({ error: false, title: "" });
    this.props.onAddTodo(newTodo);
  };

  handleCancelTodoAdding = () => {
    this.setState({ title: "", error: false });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <TextInput
          value={this.state.title}
          handleChange={this.handleChange}
          error={this.state.error}
          submitButtonType="submit"
          onCancelTodoAdding={this.handleCancelTodoAdding}
        />
      </form>
    );
  }
}

export default Form;