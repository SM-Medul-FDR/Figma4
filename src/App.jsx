import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Register from './Components/registation/register'
import Login from './Components/login/Login'
import app from './FireBase.config'
import { ToastContainer } from 'react-toastify'
import SubscriberPage from './Pages/SubscriberPage'
import LayoutOne from './Layout/LayoutOne'


function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/log' element={<Login/>}/>

        <Route path='/' element={<LayoutOne/>} >
        <Route path='/' element={<HomePage/>} />
        
        
        <Route path='/sub' element={<SubscriberPage/>} />
        </Route>
      </Route>
    )
  ) 

  return (
    <>
           <RouterProvider router={myRoute}/>
           <ToastContainer />
    </>
  )
}

export default App
