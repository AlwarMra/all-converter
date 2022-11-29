import React from 'react'

const LinearGradient = ({ title }: { title: string }) => {
  return (
    <linearGradient id={title}>
      <stop offset='5%' stop-color='#f5d0fe' />
      <stop offset='95%' stop-color='#bae6fd' />
    </linearGradient>
  )
}

export default LinearGradient
