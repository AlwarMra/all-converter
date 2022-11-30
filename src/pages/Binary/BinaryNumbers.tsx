import React, { useReducer } from 'react'
import AccordionItem from '../../components/AccordionItem'
import Conversor from '../../components/Conversor'
import Table from '../../components/Table'
import Title from '../../components/Title'
import useAccordion from '../../hooks/useAccordion'
import {
  binaryToDecimal,
  binaryToHex,
  binaryToOctal,
  octalToDecimal,
  octalToHex,
  octalToBinary,
  hexToDecimal,
  hexToBinary,
  hexToOctal,
  decimalToBinary,
  decimalToOctal,
  decimalToHex,
} from '../../utils/binaryConversor'
enum binaryCode {
  BINARY = 'BINARY',
  DECIMAL = 'DECIMAL',
  HEX = 'HEXADECIMAL',
  OCTAL = 'OCTAL',
  RESET = 'RESET',
}

interface initialState {
  binary: string
  octal: string
  decimal: string
  hex: string
}

const initialBinaryState: initialState = {
  binary: '0',
  octal: '0',
  decimal: '0',
  hex: '0',
}
interface payload {
  value: string
}
type Actions = {
  type: binaryCode
  payload?: payload
}

function binaryReducer(state: initialState, action: Actions): initialState {
  switch (action.type) {
    case binaryCode.BINARY:
      const binary = action.payload!.value.replace(/[^0-1]/g, '')
      return {
        ...state,
        binary: binary,
        octal: binaryToOctal(binary),
        decimal: binaryToDecimal(binary).toString(),
        hex: binaryToHex(binary),
      }
    case binaryCode.DECIMAL:
      const decimal = action.payload!.value.replace(/\D/g, '')
      return {
        ...state,
        decimal: decimal,
        hex: decimalToHex(decimal),
        octal: decimalToOctal(decimal),
        binary: decimalToBinary(decimal),
      }
    case binaryCode.OCTAL:
      const octal = action.payload!.value.replace(/\D/g, '')

      return {
        ...state,
        octal: octal,
        binary: octalToBinary(octal),
        decimal: octalToDecimal(octal).toString(),
        hex: octalToHex(octal),
      }
    case binaryCode.HEX:
      const hex = action.payload!.value
      return {
        ...state,
        hex: hex,
        octal: hexToOctal(hex),
        binary: hexToBinary(hex),
        decimal: hexToDecimal(hex).toString(),
      }
    case binaryCode.RESET:
      return { ...initialBinaryState }
    default:
      return { ...state }
  }
}

const BinaryNumbers = () => {
  const [state, dispatch] = useReducer(binaryReducer, initialBinaryState)
  const { selected, toggleAccordion } = useAccordion()

  const binary = state.binary
  const decimal = state.decimal
  const octal = state.octal
  const hex = state.hex

  return (
    <div className='p-4 grid gap-4 mx-auto grid-cols-1 md:grid-cols-3'>
      <div className='col-span-2'>
        {' '}
        <Title>
          <>Binary / Number conversion</>
        </Title>
        <Conversor>
          <Conversor.Group type={binaryCode.BINARY} title={binaryCode.BINARY}>
            <Conversor.InputText
              name={'Binary'}
              type={binaryCode.BINARY}
              dispatch={dispatch}
              value={binary}
            />
          </Conversor.Group>

          <Conversor.Group type={binaryCode.DECIMAL} title={binaryCode.DECIMAL}>
            <Conversor.InputText
              name={'Decimal'}
              type={binaryCode.DECIMAL}
              dispatch={dispatch}
              value={decimal}
            />
          </Conversor.Group>

          <Conversor.Group type={binaryCode.OCTAL} title={binaryCode.OCTAL}>
            <Conversor.InputText
              name={'octal'}
              type={binaryCode.OCTAL}
              dispatch={dispatch}
              value={octal}
            />
          </Conversor.Group>

          <Conversor.Group type={binaryCode.HEX} title={binaryCode.HEX}>
            <Conversor.InputText
              name={'hex'}
              type={binaryCode.HEX}
              dispatch={dispatch}
              value={hex}
            />
          </Conversor.Group>
        </Conversor>
      </div>
      <div className='mt-4'>
        <h3 className='bold text-2xl mb-4'>How to: </h3>
        <AccordionItem
          title={'Binary to Decimal / Decimal to Binary'}
          toggle={toggleAccordion}
          selected={selected}
        >
          <div className='acc-container'>
            <p className='acc-accent'>Binary to Decimal:</p>
            <p>For binary number with n digits:</p>
            <div className='acc-quote'>
              <p className='acc-italic'>
                d<sub>n-1</sub> ... d<sub>3</sub> d<sub>2</sub> d<sub>1</sub> d
                <sub>0</sub>
              </p>
            </div>
            <p>
              The decimal number is equal to the sum of binary digits (d
              <sub>n</sub>) times their power of 2 (2<sup>n</sup>):
            </p>
            <div className='acc-quote'>
              <p className='acc-italic'>
                decimal = d<sub>0</sub>×2<sup>0</sup> + d<sub>1</sub>×2
                <sup>1</sup> + d<sub>2</sub>×2<sup>2</sup> + ...
              </p>
            </div>
            <p>Example:</p>
            <div className='acc-quote'>
              <p className='acc-italic'>
                111001<sub>2</sub> = 1⋅2<sup>5</sup> + 1⋅2<sup>4</sup> + 1⋅2
                <sup>3</sup> + 0⋅2<sup>2</sup> + 0⋅2<sup>1</sup> + 1⋅2
                <sup>0</sup> = 5710
              </p>
            </div>
          </div>
          <div className='acc-container'>
            <p className='acc-accent'>Decimal to Binary:</p>
            <ul className='space-y-1 list-disc list-inside mb-8'>
              <li>Divide the number by 2</li>
              <li>Get the integer quotient for the next iteration</li>
              <li>Get the remainder for the binary digit</li>
              <li>Repeat the steps until the quotient is equal to 0</li>
            </ul>
            <p>Example:</p>
            <div className='acc-quote'>
              <p className='acc-italic'>13 % 2 = 1</p>
              <p className='acc-italic'>6 % 2 = 0</p>
              <p className='acc-italic'>3 % 2 = 1</p>
              <p className='acc-italic'>1 % 2 = 1</p>

              <p className='acc-italic'>
                13<sub>10</sub> = 1101<sub>2</sub>
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          title={'Binary to Octal / Octal to Binary'}
          toggle={toggleAccordion}
          selected={selected}
        >
          <div className='acc-container'>
            <p className='mb-2'>
              Convert every three binary digits to one octal digit and vice
              versa following the next table:
            </p>
            <Table>
              <tbody>
                <tr>
                  <Table.Thead d={'left'}>Octal</Table.Thead>
                  <Table.Thead d={'right'}>Binary</Table.Thead>
                </tr>
                <tr>
                  <Table.Cell>0</Table.Cell>
                  <Table.Cell>000</Table.Cell>
                </tr>
                <tr>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>001</Table.Cell>
                </tr>
                <tr>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell>010</Table.Cell>
                </tr>
                <tr>
                  <Table.Cell>3</Table.Cell>
                  <Table.Cell>011</Table.Cell>
                </tr>
                <tr>
                  <Table.Cell>4</Table.Cell>
                  <Table.Cell>100</Table.Cell>
                </tr>
                <tr>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell>101</Table.Cell>
                </tr>
                <tr>
                  <Table.Cell>6</Table.Cell>
                  <Table.Cell>110</Table.Cell>
                </tr>
                <tr>
                  <Table.Cell>7</Table.Cell>
                  <Table.Cell>111</Table.Cell>
                </tr>
              </tbody>
            </Table>
            <p>Example:</p>
            <div className='acc-quote'>
              <p className='acc-italic'>
                154<sub>8</sub> = 1 5 4 = 1 101 100 = 1101100<sub>2</sub>
              </p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          title={'Binary to Hex / Hex to Binary'}
          toggle={toggleAccordion}
          selected={selected}
        >
          <p className='mb-2'>
            Convert every four binary digits to one hex digit and vice versa
            following the next table:
          </p>
          <Table>
            <tbody>
              <tr>
                <Table.Thead d={'left'}>Hex</Table.Thead>
                <Table.Thead d={'right'}>Binary</Table.Thead>
              </tr>
              <tr>
                <Table.Cell>0</Table.Cell>
                <Table.Cell>000</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>0001</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>0010</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>0011</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>0100</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>0101</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>0110</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>7</Table.Cell>
                <Table.Cell>0111</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>8</Table.Cell>
                <Table.Cell>1000</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>1001</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>A</Table.Cell>
                <Table.Cell>1010</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>B</Table.Cell>
                <Table.Cell>1011</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>C</Table.Cell>
                <Table.Cell>1100</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>D</Table.Cell>
                <Table.Cell>1101</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>E</Table.Cell>
                <Table.Cell>1110</Table.Cell>
              </tr>
              <tr>
                <Table.Cell>F</Table.Cell>
                <Table.Cell>1111</Table.Cell>
              </tr>
            </tbody>
          </Table>
          <p>Example:</p>
          <div className='acc-quote'>
            <p className='acc-italic'>
              6C<sub>16</sub> = 6 C = 110 1100 = 1101100<sub>2</sub>
            </p>
          </div>
        </AccordionItem>
      </div>
    </div>
  )
}

export default BinaryNumbers

{
  /* <Table>

<tbody>
  <tr>
    <Table.Thead>Octal</Table.Cell>
    <Table.Thead>Binary</Table.Cell>
  </tr>
  <tr>
    <Table.Cell>0</Table.Cell>
    <Table.Cell>000</Table.Cell>
  </tr>
  <tr>
    <Table.Cell>1</Table.Cell>
    <Table.Cell>001</Table.Cell>
  </tr>
  <tr>
    <Table.Cell>2</Table.Cell>
    <Table.Cell>010</Table.Cell>
  </tr>
  <tr>
    <Table.Cell>3</Table.Cell>
    <Table.Cell>011</Table.Cell>
  </tr>
  <tr>
    <Table.Cell>4</Table.Cell>
    <Table.Cell>100</Table.Cell>
  </tr>
  <tr>
    <Table.Cell>5</Table.Cell>
    <Table.Cell>101</Table.Cell>
  </tr>
  <tr>
    <Table.Cell>6</Table.Cell>
    <Table.Cell>110</Table.Cell>
  </tr>
  <tr>
    <Table.Cell>7</Table.Cell>
    <Table.Cell>111</Table.Cell>
  </tr>
</tbody>
</Table> */
}
