import React, { useState } from 'react'

interface Props {
  title: string
  disabled?: boolean
  getValue?: (e: string) => void
  value?: string
}

const Textarea: React.FC<Props> = ({
  title,
  disabled = false,
  value = '',
  getValue,
}) => {
  return (
    <textarea
      className='w-full p-4 text-sm text-gray-900 primary- border border-sky-200 rounded-lg focus:ring-0'
      placeholder={`${title} input...`}
      name={title}
      id={title}
      cols={30}
      rows={10}
      disabled={disabled}
      value={value}
      onChange={
        getValue
          ? e => {
              getValue(e.target.value)
            }
          : undefined
      }
    ></textarea>
  )
}

export default Textarea
