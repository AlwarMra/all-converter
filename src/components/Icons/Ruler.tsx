import React from 'react'
import LinearGradient from './LinearGradient'

const Ruler = ({ w = 40, h = 40 }) => {
  const name = 'SVG__Ruler'
  return (
    <>
      <svg
        style={{ fill: `url(#${name})` }}
        width={w}
        height={h}
        viewBox='0 -8 72 72'
      >
        <LinearGradient title={name} />
        <path d='M57,12h3V4L12,52h8V49a.34.34,0,0,1,.68,0v3h4.2V49a.34.34,0,0,1,.68,0v3h4.2V49a.34.34,0,0,1,.68,0v3h4.21V49a.34.34,0,0,1,.67,0v3h4.21V49a.34.34,0,0,1,.67,0v3h4.21V49a.34.34,0,0,1,.67,0v3h4.21V49A.34.34,0,0,1,50,49v3h4.21V49a.34.34,0,0,1,.67,0v3H60V46.86H57a.34.34,0,0,1,0-.67h3V42H57a.34.34,0,0,1,0-.67h3V37.1H57a.34.34,0,0,1,0-.67h3V32.22H57a.34.34,0,0,1,0-.67h3V27.34H57a.34.34,0,0,1,0-.67h3V22.46H57a.34.34,0,0,1,0-.68h3v-4.2H57a.34.34,0,0,1,0-.68h3V12.7H57A.34.34,0,0,1,57,12ZM52.78,44.78H29.34L52.78,21.34Z' />
      </svg>
    </>
  )
}

export default Ruler
