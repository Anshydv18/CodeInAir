import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Editor from './components/Editor/Editor'
import ContactForm from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet/>
    
    <Footer/>
    </>
  )
}

export default App
