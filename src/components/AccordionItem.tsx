import React from 'react'

interface AccordionComponent {
  title: string
  selected: null | string | number
  toggle: (i: any) => void
  children: React.ReactNode
}

const Accordion: React.FC<AccordionComponent> = ({
  title,
  selected,
  toggle,
  children,
}) => {
  return (
    <>
      <div>
        <div
          className='cursor-pointer border rounded-md p-2'
          onClick={() => toggle(title)}
        >
          <h2 className=''>{title}</h2>
        </div>
        <div
          data-accordion={selected === title ? 'open' : 'close'}
          className='px-2 mt-4 overflow-hidden max-h-0 transition-all duration-300 delay-400 accordion:h-auto accordion:max-h-[3000px] accordion:transition-all accordion:duration-300'
        >
          {children}
        </div>
      </div>
    </>
  )
}
export default Accordion
