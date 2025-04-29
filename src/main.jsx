import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layouts/Root.jsx'
import Home from './Layouts/Componenets/Home.jsx'
import Login from './Login/Login.jsx'
import Register from './Register/Register.jsx'
import SignUp from './SignUP/SignUp.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children: [
      {index:true, Component:Home},
      {path:'/login', Component:Login },
      {path:'/register', Component:Register},
      {path:'/signUp', Component: SignUp}
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
