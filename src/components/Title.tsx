import React from 'react'

const Title = ({ children }: { children: JSX.Element }) => {
  return <h1 className='bold text-3xl mb-4'>{children}</h1>
}

export default Title
