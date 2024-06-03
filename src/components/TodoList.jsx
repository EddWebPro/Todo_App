import TodoItem from "./TodoItem"


const TodoList = ({todos, setEdit, removeTodo}) => {
  return (
    <div className='bg-gray-100 w-full shadow-md p-6 rounded max-w-lg lg:w-1/4'>
          <ul>
            {todos.map((todo, index) => (
              <TodoItem  key={index} index={index} todo={todo} setEdit={setEdit} removeTodo={removeTodo}/>
            ))}
          </ul>
        </div>
  )
}

export default TodoList