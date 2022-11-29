import React from 'react'
//Packages
import { Routes, Route } from 'react-router-dom'
//Pages
import Home from './pages/Home'
import Colors from './pages/Colors/Colors'
import BinaryText from './pages/Binary/BinaryText'

//Components
import Header from './components/Header'
import Palette from './components/Icons/Palette'

function App(): JSX.Element {
  return (
    <div className='App min-h-screen bg-[url("./assets/marble-wall.jpg")] bg-no-repeat bg-center bg-cover bg-fixed'>
      <Header />
      <div className='max-w-6xl w-[95%] bg-sky-50 mx-auto rounded-md py-4 mt-12'>
        <div className='max-w-5xl m-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/convert/colors' element={<Colors />} />
            <Route path='/convert/binary-text' element={<BinaryText />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
