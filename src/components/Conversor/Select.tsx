import React from 'react'

interface Select {
  name: string
  options: Array<string>
  dispatch: any
}

const Select: React.FC<Select> = ({ name, options, dispatch }) => {
  return (
    <select
      name={name}
      id={name}
      onChange={e =>
        dispatch({
          type: name,
          payload: e.target.value,
        })
      }
      className='border border-sky-200 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 block w-full p-2.5'
    >
      {options.map(opt => {
        return (
          <option key={opt} value={opt}>
            {opt}
          </option>
        )
      })}
    </select>
  )
}

export default Select
