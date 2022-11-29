import React from 'react'
import Group from './Group'
import InputNumber from './InputNumber'
import InputText from './InputText'
import Textarea from './Textarea'

interface Children {
  children?: React.ReactNode
}
const Conversor = ({ children }: Children) => {
  return (
    <form className='max-w-xl p-2 rounded-md border border-fuchsia-200 bg-white mb-12 bg-gradient-to-br from-fuchsia-50 via-indigo-50 to-sky-100'>
      {children}
    </form>
  )
}

Conversor.Group = Group
Conversor.InputText = InputText
Conversor.InputNumber = InputNumber
Conversor.Textarea = Textarea

export default Conversor
