interface InputText {
  name: string
  value: string
  max?: number
  type: string
  dispatch: any
}

const InputText: React.FC<InputText> = ({
  name,
  value,
  type,
  max,
  dispatch,
}) => {
  let maxLength
  if (max) maxLength = max.toString().length
  return (
    <input
      className='border border-sky-200 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 block w-full p-2.5'
      type='text'
      name={name}
      id={name}
      value={value}
      maxLength={maxLength}
      onChange={e =>
        dispatch({
          type: type,
          payload: {
            value: e.target.value,
            name,
          },
        })
      }
    />
  )
}

export default InputText
