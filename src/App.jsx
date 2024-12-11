import React from 'react'
import HomePage from './homepage/HomePage'
import Login from './login/Login'
import Register from './register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/homePage' element={<HomePage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App