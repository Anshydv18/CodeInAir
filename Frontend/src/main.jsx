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
import Interview from './Pages/Interview.jsx';
import PostInterview from './Pages/PostInterview.jsx';
import Updateeditor from './components/Updateeditor/Updateeditor.jsx';

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
      <Route path='interview' element={<Interview/>} />
      <Route path='post' element={<PostInterview/>}/>
      <Route path='updateeditor' element={<Updateeditor/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
    <RouterProvider router={router} />
    <Toaster />
    </AuthContextProvider>
);
