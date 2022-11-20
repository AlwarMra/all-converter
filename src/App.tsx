import React from 'react'
//Packages
import { Routes, Route } from 'react-router-dom'
//Pages
import Colors from './pages/Colors/Colors'
import Home from './pages/Home'
//Components
import Header from './components/Header'

function App(): JSX.Element {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/convert/colors' element={<Colors />} />
      </Routes>
    </div>
  )
}

export default App
