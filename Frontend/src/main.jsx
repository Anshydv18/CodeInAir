import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Signup from './components/Signup/Signup.jsx';
import Herosection from './components/Herosection/Herosection.jsx';
import Login from './components/Login/Login.jsx';
import ContactForm from './components/ContactUs/ContactUs.jsx';
import Dsasheet from './components/DSASheet/Dsasheet.jsx';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './Context/AuthContext.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Editor from './components/Editor/Editor.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Herosection />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='contactus' element={<ContactForm />} />
      <Route path='dsa' element={<Dsasheet />} />
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='editor' element={<Editor/>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router} />
    <Toaster />
    </AuthContextProvider>
  </StrictMode>
);
