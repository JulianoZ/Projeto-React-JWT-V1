import { AuthProvider } from "./context/authContext";


import { useState } from 'react' 
//import './App.css' 
import Header from './components/Header'
import MainContent from './components/MainContent' 
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Sobre from "./pages/Sobre"; 
import Contato from './pages/Contato'; 
import UserList from './pages/users/userList';
import UserForm from './pages/users/userForm';
import Login from './pages/auth/login'
import LoginSimples from './pages/auth/loginsimples'



function App() { 
  
  
  const [count, setCount] = useState(0)
  
  return ( 
  <AuthProvider>
  <> 
  
  <div className="min-h-screen flex flex-col w-[95%] mx-auto"> 
    <Router> 
      <div className="min-h-screen flex flex-col w-[95%] mx-auto">    
    
     <Header /> 
     <Routes> <Route path="/" element={<MainContent />} /> 
     <Route path="/sobre" element={<Sobre />} /> 
     <Route path="/contato" element={<Contato />} />     
     <Route path="/users" element={<UserList />} /> 
     <Route path="/users/new" element={<UserForm />} />
     <Route path="/users/edit/:id" element={<UserForm />} />
     <Route path="/login" element={<Login />} />
     <Route path="/loginsimples" element={<LoginSimples />} />
     

      </Routes>
       <Footer /> 
       </div> 
     </Router>
      </div> </> 
      </AuthProvider>
     ) 
    } export default App