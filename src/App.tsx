import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Colors from './pages/Colors'
import Home from './pages/Home'
import './App.css'

function App(): JSX.Element {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/convert/colors' element={<Colors />} />
      </Routes>
    </div>
  )
}

export default App
