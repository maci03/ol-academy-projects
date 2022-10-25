import React from "react";

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: "",
      error: false
    }
  }

  handleChange = (e) => this.setState({ title: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this.state (child)', this.state);
    
    const todoExists = this.props.todos.find(td => td.title === this.state.title);
    if (todoExists){
      this.setState({ error: true })
      return;
    }
    const newTodo = {
      id: this.props.todos.length + 1,
      title: this.state.title
    }
    
    this.setState({ error: false });
    this.props.onAddTodo(newTodo);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.handleChange} />
        {this.state.error && <small>დავალება ამ სახელობით არსებობს</small>}
        <button type="submit">დამატება</button>
      </form>
    )
  }
}

export default Form;
