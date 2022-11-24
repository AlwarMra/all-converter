import React from 'react'
//Packages
import { Routes, Route } from 'react-router-dom'
//Pages
import Home from './pages/Home'
import Colors from './pages/Colors/Colors'
import BinaryText from './pages/Binary/BinaryText'

//Components
import Header from './components/Header'

function App(): JSX.Element {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/convert/colors' element={<Colors />} />
        <Route path='/convert/binary-text' element={<BinaryText />} />
      </Routes>
    </div>
  )
}

export default App
