import React from "react";
import Todo from "./Todo"

class Todos extends React.Component {
  render(){
    return (
      <ul>
        {this.props.todos.map(item => <Todo key={item.id} listValue={item.title}/>)}
      </ul>
    )
  }
}

export default Todos;
