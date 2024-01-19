import React from 'react';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Transact from './Transact/Transact';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState([]) 
  const [user, setUser] = useState(null)

  const handleSetUser = (e) =>{
    setUser(e)
  }

  const handleSetItem = (e) => {
    setItem(e)
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} handleSetItem={handleSetItem} handleSetUser={handleSetUser}/>} />
        <Route path="/login" element={<Login user={user} handleSetUser={handleSetUser}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/transact" element={<Transact item={item} user={user}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
