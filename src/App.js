import React from 'react'
import Login from './components/Login';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Register from './components/Register';



function App() {
  return (
    <Router>
        <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/Register' element={<Register/>} />
        
    </Routes>
  </Router>
   
  )
}

export default App