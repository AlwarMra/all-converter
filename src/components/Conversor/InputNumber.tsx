interface InputNumber {
  name: string
  value: number
  max?: number
  type: string
  dispatch: any
}

const InputNumber: React.FC<InputNumber> = ({
  name,
  value,
  max,
  type,
  dispatch,
}) => {
  let maxLength
  if (max) maxLength = max.toString().length

  return (
    <input
      className='border border-sky-200 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 block w-full p-2.5'
      onKeyUp={() => {
        if (value < 0) value === 0
      }}
      type='number'
      name={name}
      id={name}
      value={value.toString()}
      min={0}
      max={max}
      data-type={type}
      maxLength={maxLength}
      onChange={e =>
        dispatch({
          type: type,
          payload: {
            value: e.target.value,
            name,
            min: 0,
            max,
          },
        })
      }
    />
  )
}
export default InputNumber
