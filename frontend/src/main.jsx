import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store.js'
// import ThemeContextProvider from './context/ThemeContextProvider'
import { Provider } from 'react-redux';



// createRoot(document.getElementById('root')).render(
//   <ThemeContextProvider>
//     <App />
//   </ThemeContextProvider>,
// )

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)





































// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<App/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//         <Route index element={<App />} />
//         <Route path="about" element={<About />} />
//         <Route path="user/:userid" element={<User />} />
//         <Route path='github' element={<Github />} loader={githuData} />
//     </Route>
//   )
// )



// UI ROuter Setup without RouterProvider
// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />} >
//         <Route index element={<App />} />
//         <Route path="about" element={<About />} />
//         <Route path="user/:userid" element={<User />} />
//         <Route path='github' element={<Github />} loader={githuData} />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
// )
