import React, { useState, useEffect, useContext } from 'react'
import { fakeDatabase } from './DummyData';
import ThemeContext from '../context/ThemeContext';

const AddTodo = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const {theme, setTheme} = useContext(ThemeContext)


    

    useEffect(()=>{
        // Simulating fetching data from a database
        setTodos(fakeDatabase);
    },[])


    const addTodo = (e) => {
        e.preventDefault()
        if(input.trim() === '') return;
        setTodos([...todos, {id:Date.now(),input, isCompleted:false, isEditable:false }])
        setInput('')
    }
    console.log(todos);
    

    const deleteTodo = (indexDelete) => {
        const newTodos = todos.filter((todo)=>(todo.id !== indexDelete));
        setTodos(newTodos)
    }

    const toggleTodo = (indexToggle) => {
        const newTodos = todos.map((todo)=>{
            return todo.id === indexToggle ? {...todo, isCompleted: !todo.isCompleted} : todo
        })
        setTodos(newTodos)
    }

    const editTodo = (indexEdit) => {
        const newTodos = todos.map((todo)=>{
            return todo.id === indexEdit ?  {...todo, isEditable: !todo.isEditable} : todo
        })
        setTodos(newTodos)
    }

    const editTodoText = (editId, newText) => {
        const newTodos = todos.map((todo)=>{
            return todo.id === editId ? {...todo, input:newText} : todo
        })
        setTodos(newTodos)
    }

    const handleCheckboxChange = () => {
        if (theme === 'dark') {
            setTheme('light');
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        } else {
            setTheme('dark');      
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }
    }
  console.log(theme);
  
    
  return (
    <>
    <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={handleCheckboxChange}
                checked={theme === 'dark'}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
      <div className='addtodo my-5'>
        <input type="text" placeholder='Add your new todo' className='todoInput border p-2 border-gray-300 mr-2 rounded' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button className='bg-blue-500 text-white p-2 rounded' onClick={addTodo}>Add Todo</button>
      </div>
      <div className='todolist'>
        <h2 className='text-xl underline mb-2'>Todo List</h2>
        <ul>
            {
                todos.map((todo,index)=>(
                    <li key={todo.id} className='mb-5'>
                    <input type='checkbox' className='mr-4' checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)}/>
                    <input 
                        type='text' 
                        value={todo.input} 
                        className={`${todo.isCompleted ? 'line-through' : ''} ${todo.isEditable ? 'border border-green-500 p-1 rounded' : 'border-none outline-0'} `}
                        readOnly={!todo.isEditable}
                        onChange={(e)=>editTodoText(todo.id, e.target.value)}
                    />
                    <button className='ml-4 bg-blue-500 text-white p-1 rounded' disabled={todo.isCompleted} onClick={() => editTodo(todo.id)} > 
                        {todo.isEditable ? 'Save' : 'Edit'}
                    </button>
                    <button className='ml-4 bg-red-500 text-white p-1 rounded' onClick={() => deleteTodo(todo.id)} > Delete </button>
                    </li>
                ))
            }
        </ul>
      </div>
    </>
  )
}

export default AddTodo
