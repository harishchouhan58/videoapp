import React, { useEffect, useState } from 'react'
import { fakeDatabase } from './DummyData';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, completeTodo } from '../features/todos/todoSlice';


const AddTodoRedux = () => {
    const [input, setInput] = useState('')
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')
    const [completeTodo, setCompleteTodo] = useState(false)
    const dispatch = useDispatch();
    const todos = useSelector(state=>state.todos);
    console.log(todos)


    // useEffect(()=>{
    //     // Simulating fetching data from a database
    //     setTodos(fakeDatabase);
    // },[])

    const addTodoHandler = (e) => {
      e.preventDefault();
        
        dispatch(addTodo(input))
        setInput('');
    }

    const saveTodoHandler = (id) => {
      dispatch(editTodo({id: id, input: editText}));
      setEditId(null);
      setEditText('');
    }

    const todoCompleted = (id) => {
      dispatch(completeTodo(id));
    }


    
  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
      <div className='todolist'>
        <h2 className='text-xl underline mb-2'>Todo List</h2>
        <ul>
          {todos.map((todo)=>(
            <li key={todo.id}>
              {
                editId === todo.id ? (
                  <>
                   <input 
                      type='text' value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                   <button className='ml-4 bg-green-500 text-white p-1 rounded' onClick={()=>saveTodoHandler(todo.id)}  > Save </button>
                  </>
                ) : (
                  <>
                    <input type='checkbox' className='mr-4' onClick={()=>todoCompleted(todo.id)} />
                    <span>{todo.input}</span>
                    <button className='ml-4 bg-blue-500 text-white p-1 rounded' onClick={
                      ()=>{
                        setEditId(todo.id) 
                        setEditText(todo.input)
                      }} > Edit </button>
                  </>
                )
              }
              <button className='ml-4 bg-red-500 text-white p-1 rounded' onClick={()=>dispatch(deleteTodo(todo.id))} > Delete </button>
            </li>
          ))}
        </ul>
            
      </div>
      {/* <div className='todolist'>
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
      </div> */}
    </>
  )
}

export default AddTodoRedux
