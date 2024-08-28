import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup/Signup.jsx'
import Herosection from './components/Herosection/Herosection.jsx'
import Login from './components/Login/Login.jsx'
import ContactForm from './components/ContactUs/ContactUs.jsx'
import Dsasheet from './components/DSASheet/Dsasheet.jsx'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Herosection/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element ={<Login/>}/>
      <Route path='contactus' element ={<ContactForm/>}/>
      <Route path='dsa' element={<Dsasheet/>}/>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
