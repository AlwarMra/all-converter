import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/AccordionItem'
import { PaletteIcon, BinaryIcon } from '../components/Icons'
import Title from '../components/Title'

const Home = () => {
  const MenuLinkClasses =
    'inline-flex items-center gap-6 p-2 border hover:bg-slate-100'

  return (
    <div>
      <Title>
        <>Online Conversor</>
      </Title>
      <div className='flex flex-col'>
        <Link to='convert/colors' className={MenuLinkClasses}>
          <PaletteIcon /> <span className='text-xl'>Colors</span>
        </Link>
        <Link to='convert/binary-text' className={MenuLinkClasses}>
          <BinaryIcon /> <span className='text-xl'>Binary</span>
        </Link>
      </div>
    </div>
  )
}

export default Home
