import { useContext } from 'react'
import './App.css'
import AddTodoRedux from './components/AddTodoRedux'
// import ThemeContext from './context/ThemeContext';


// function App() {
//   const { theme } = useContext(ThemeContext);
//   console.log(theme);
  
//   return (
//     <div className={`text-center m-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-4 rounded`}>
//     <h1 className='bg-amber-50 text-center text-red-700 text-2xl line-clamp-1 leading-15 p-1 '>Vite + React  </h1>
//     <AddTodo />
//     </div>
//   )
// }

function App() {
  return (
    <div className='text-center m-4 bg-white text-black p-4 rounded'>
    <h1 className='bg-amber-50 text-center text-red-700 text-2xl line-clamp-1 leading-15 p-1 '>Vite + React  </h1>
    <AddTodoRedux />
    </div>
  )
} 

export default App
