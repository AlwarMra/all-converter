import React from 'react'
import { Link } from 'react-router-dom'
import AccordionItem from '../components/AccordionItem'
import {
  PaletteIcon,
  BinaryIcon,
  ArrowRightIcon,
  RulerIcon,
} from '../components/Icons'
import Title from '../components/Title'
import useAccordion from '../hooks/useAccordion'

const Home = () => {
  const { selected, toggleAccordion } = useAccordion()

  const MenuLinkClasses =
    'inline-flex items-center gap-6 p-2 border mb-2 hover:bg-slate-100 w-full'

  return (
    <div>
      <Title>
        <>Online Conversor</>
      </Title>
      <div className='flex flex-col'>
        <Link to='convert/colors' className={MenuLinkClasses}>
          <PaletteIcon /> <span className='text-xl'>Colors</span>
        </Link>
        <AccordionItem
          title='Binary'
          toggle={toggleAccordion}
          selected={selected}
          defaultValue={false}
          icon={<BinaryIcon />}
        >
          <Link to='convert/binary-text' className={MenuLinkClasses}>
            <ArrowRightIcon w={25} h={25} /> Binary to Text
          </Link>
          <Link to='convert/binary-number' className={MenuLinkClasses}>
            <ArrowRightIcon w={25} h={25} /> Binary / number
          </Link>
        </AccordionItem>
        <Link to='convert/lengths' className={MenuLinkClasses}>
          <RulerIcon /> <span className='text-xl'>Lengths</span>
        </Link>
      </div>
    </div>
  )
}

export default Home
