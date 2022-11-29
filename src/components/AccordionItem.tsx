import React from 'react'

interface AccordionComponent {
  title: string
  icon?: React.ReactNode
  selected: null | string | number
  toggle: (i: any) => void
  children: React.ReactNode
  defaultValue?: boolean
}

const Accordion: React.FC<AccordionComponent> = ({
  title,
  icon,
  selected,
  toggle,
  children,
  defaultValue = true,
}) => {
  const accordionFirstType = (
    <>
      <div>
        <div
          className='cursor-pointer border rounded-md p-2 flex justify-between items-center primary-color-m border-sky-400'
          onClick={() => toggle(title)}
        >
          <h2 className=''>{title}</h2>
          <span
            data-accordion={selected === title ? 'open' : 'close'}
            className='text-5xl leading-[0] relative right-4 before:content-[""] before:w-4 before:h-1 before:absolute before:rotate-90 before:bg-sky-400 before:transition-transform before:duration-300 after:content-[""] after:w-4 after:h-1 after:absolute after:bg-sky-400 accordion:before:rotate-0 '
          />
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

  const accordionSecondType = (
    <>
      <div>
        <div
          className='cursor-pointer flex items-center gap-6 p-2 border hover:bg-slate-100'
          onClick={() => toggle(title)}
        >
          {icon && <span>{icon}</span>}
          <h3 className='text-3xl'>{title}</h3>
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

  return defaultValue ? accordionFirstType : accordionSecondType
}
export default Accordion
