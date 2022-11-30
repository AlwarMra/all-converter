import React from 'react'

const Cell = ({ children }: { children: React.ReactNode }) => {
  return <td className='border-b border-sky-100 p-1'>{children}</td>
}

export default Cell
