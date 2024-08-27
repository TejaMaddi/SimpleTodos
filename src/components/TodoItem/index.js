// Write your code here
import './index.css'

const TodoItem = props => {
  const {deleteTodo, todoDetails} = props
  const onDeleteTodo = () => {
    deleteTodo(todoDetails.id)
  }
  return (
    <li className="todo">
      <p className="p1">{todoDetails.title}</p>
      <button className="btn1" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
