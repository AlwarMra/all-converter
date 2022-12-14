import LinearGradient from './LinearGradient'

const ArrowRight = ({ w = 40, h = 40 }) => {
  const name = 'SVG__Arrow__Right'
  return (
    <svg
      width={w}
      height={h}
      style={{ fill: `url(#${name})` }}
      viewBox='0 0 48 48'
    >
      <LinearGradient title={name} />

      <g id='Layer_2' data-name='Layer 2'>
        <g id='invisible_box' data-name='invisible box'>
          <rect width='48' height='48' fill='none' />
        </g>
        <g id='Q3_icons' data-name='Q3 icons'>
          <path d='M22.4,4a2,2,0,0,0-2,2V16.1H8a2,2,0,0,0-2,2V29.9a2,2,0,0,0,2,2H20.4V42a2,2,0,0,0,2,2,2.2,2.2,0,0,0,1.5-.6L43.4,25.5a2.2,2.2,0,0,0,0-3L23.9,4.6A2.2,2.2,0,0,0,22.4,4Z' />
        </g>
      </g>
    </svg>
  )
}

export default ArrowRight
