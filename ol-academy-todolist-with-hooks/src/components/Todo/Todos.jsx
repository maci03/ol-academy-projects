import Todo from "./Todo"

const Todos = (props) => (
  <ul>
    {props.todos.map(item => <Todo key={item.id} listValue={item.title} />)}
  </ul>
)

export default Todos;