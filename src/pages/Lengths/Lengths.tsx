import React, { useState } from 'react'
// Components
import Conversor from '../../components/Conversor'
import InputNumber from '../../components/Conversor/InputNumber'
import Title from '../../components/Title'
// Typescript
import { lengthCode } from '../../typescript/enums'
// Funtions
import { checkValue } from '../../utils/utils'
import calcLengths from '../../utils/lengthsConversor'

type lengthEvent = {
  type: string
  payload: lengthCode
  value: number
}
type inputLength = {
  type: string
  payload: {
    value: string
    max: number | undefined
    min: number
  }
}
const Lengths: React.FC = () => {
  const [fromValue, setFromValue] = useState({
    name: 'fromValue',
    type: lengthCode.MM,
    value: 0,
  })
  const [toValue, setToValue] = useState({
    name: 'toValue',
    type: lengthCode.MM,
    value: 0,
  })
  const lengths = Object.values(lengthCode).slice(0, -1)

  function onChangeLengths(e: lengthEvent) {
    if (e.type === 'fromValue') {
      setFromValue(prevState => ({
        ...prevState,
        type: e.payload,
      }))
      setToValue(prevState => ({
        ...prevState,
        value: calcLengths(e.payload, toValue.type, fromValue.value),
      }))
    }
    if (e.type === 'toValue') {
      setToValue(prevState => ({
        ...prevState,
        type: e.payload,
        value: calcLengths(fromValue.type, e.payload, fromValue.value),
      }))
    }
  }
  function onChangeInputLength(e: inputLength) {
    const newValue = checkValue(e.payload.value, e.payload.min)
    const newValConverted = calcLengths(fromValue.type, toValue.type, newValue)
    setFromValue(prevState => ({ ...prevState, value: newValue }))
    setToValue(prevState => ({
      ...prevState,
      value: newValConverted,
    }))
  }
  return (
    <div className='p-4 grid gap-4 mx-auto grid-cols-1 md:grid-cols-3'>
      <div className='col-span-2'>
        {fromValue.type}
        <Title>
          <>lengths conversion</>
        </Title>
        <Conversor>
          <Conversor.Group title={'ggg'} type={'ggg'}>
            <Conversor.Select
              name={fromValue.name}
              options={lengths}
              dispatch={onChangeLengths}
            />
            <Conversor.Select
              name={toValue.name}
              options={lengths}
              dispatch={onChangeLengths}
            />
          </Conversor.Group>
          <Conversor.Group title={fromValue.type} type={fromValue.type}>
            <InputNumber
              name={fromValue.type}
              type={'currentValue'}
              value={fromValue.value}
              dispatch={onChangeInputLength}
            />
          </Conversor.Group>
          <Conversor.Group title={toValue.type} type={toValue.type}>
            <InputNumber
              name={toValue.type}
              type={toValue.type}
              value={toValue.value}
              disabled={true}
              dispatch
            />
          </Conversor.Group>
        </Conversor>
      </div>
    </div>
  )
}

export default Lengths
