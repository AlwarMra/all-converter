import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-sky-200 via-indigo-100 to-fuchsia-200 '>
      <div className='m-auto max-w-5xl w-[95%] py-4'>
        <Link
          to={'/'}
          className='font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-sky-400'
        >
          All converter
        </Link>
      </div>
    </header>
  )
}

export default Header
