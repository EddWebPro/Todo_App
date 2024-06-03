
import { useState } from 'react';
import './App.css'
import { FaPencilAlt, FaPlus, } from "react-icons/fa";
import TodoList from './components/TodoList';
function App() {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [editIndex, seteditIndex] = useState(-1)

    const setEdit = (index) => {
      setInput(todos[index].todo)
      seteditIndex(index)
    }
    
    const addTodo = async () => {
      try {
        if(input.trim() !== '') {
          setTodos([...todos, {id: new Date(), todo: input}])
          setInput('')
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    const updateTodo = async () => {
      try {
        if(input.trim() !== '') {
          const updateTodos = [...todos]
          updateTodos[editIndex].todo = input
          setTodos(updateTodos)
          seteditIndex(-1)
          setInput('')
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    const removeTodo = async (id) => {
      let filteredTodos = todos.filter((todo) => todo.id !== id)
      setTodos(filteredTodos)
    }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-custom-background bg-cover bg-center bg">
        <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4 mb-3'>
          <h1 className='text-3xl font-bold text-center mb-4'>Todo App</h1>
          <div className='flex'>
          <input
           type="text"
           placeholder='Add a todo'
           className='py-2 px-4 border rounded w-full focus:outline-none mr-2' 
           value={input}
           onChange={(e) => setInput(e.target.value)}
           />
          <button onClick={editIndex === -1 ? addTodo : updateTodo} className='bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700 py-2 px-4 rounded'>
            {editIndex === -1 ? <FaPlus /> : <FaPencilAlt />}
          </button>
          </div>
        </div>

        {
          todos.length > 0 && <TodoList todos={todos} setEdit={setEdit} removeTodo={removeTodo}/>
        }
      </div>
    </>
  )
}

export default App
