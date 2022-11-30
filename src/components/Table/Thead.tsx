import React from 'react'

const Thead = ({
  children,
  d = 'center',
}: {
  children: React.ReactNode
  d?: string
}) => {
  let classD
  d === 'left' ? (classD = 'rounded-tl-xl') : (classD = 'rounded-tr-xl')
  return <th className={'text-left p-2 bg-sky-100 ' + classD}>{children}</th>
}

export default Thead
