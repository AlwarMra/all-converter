import React, { useReducer } from 'react'
import AccordionItem from '../../components/AccordionItem'
import Conversor from '../../components/Conversor'
import useAccordion from '../../hooks/useAccordion'
import { RGBToHex, RGBToHSL, RGBToHSV } from '../../utils/colors/rgbToAll'
import { HSLToHex, HSLToHSV, HSLtoRGB } from '../../utils/colors/hslToAll'
import { HSVToHEX, HSVToHSL, HSVToRGB } from '../../utils/colors/hsvToAll'
import { HEXToHSL, HEXToHSV, HEXToRGB } from '../../utils/colors/hexToAll'
import Title from '../../components/Title'

enum colorCode {
  RGB = 'RGB',
  HEX = 'HEX',
  HSV = 'HSV',
  HSL = 'HSL',
  RESET = 'RESET',
}
interface RGB {
  r: number
  g: number
  b: number
}
interface HSL {
  h: number
  s: number
  l: number
}
interface HSV {
  h: number
  s: number
  v: number
}
interface initialState {
  RGB: RGB
  HEX: string
  HSL: HSL
  HSV: HSV
}
interface payload {
  value: number | string
  name: string
  min: number
  max: number
}
type Actions = {
  type: colorCode
  payload?: payload
}

const initialColorState: initialState = {
  RGB: { r: 0, g: 0, b: 0 },
  HEX: '000000',
  HSL: { h: 0, s: 0, l: 0 },
  HSV: { h: 0, s: 0, v: 0 },
}
type State = typeof initialColorState

function colorReducer(state: State, action: Actions) {
  switch (action.type) {
    case colorCode.RGB:
      const rgb = managePayload(state.RGB, action.payload!)
      const rgbToHexResult = RGBToHex(rgb)
      const rgbToHslResult = RGBToHSL(rgb)
      const rgbToHsvResult = RGBToHSV(rgb)

      return {
        ...state,
        RGB: { ...state.RGB },
        HEX: rgbToHexResult,
        HSL: { ...rgbToHslResult },
        HSV: { ...rgbToHsvResult },
      }
    case colorCode.HEX:
      const hex = action.payload!.value.toString().replace('#', '')
      const hexToRgb = HEXToRGB(hex) ?? state.RGB
      const hexToHsl = HEXToHSL(hex) ?? state.HSL
      const hexToHsv = HEXToHSV(hex) ?? state.HSV
      return {
        ...state,
        HEX: hex.toUpperCase(),
        RGB: { ...hexToRgb },
        HSV: { ...hexToHsv },
        HSL: { ...hexToHsl },
      }
    case colorCode.HSL:
      const hsl = managePayload(state.HSL, action.payload!)
      const hslToRgbResult = HSLtoRGB(hsl)
      const hslToHexResult = HSLToHex(hsl)
      const hslToHsvResult = HSLToHSV(hsl)
      return {
        ...state,
        HSL: { ...state.HSL },
        HSV: { ...hslToHsvResult },
        RGB: { ...hslToRgbResult },
        HEX: hslToHexResult,
      }
    case colorCode.HSV:
      const hsv = managePayload(state.HSV, action.payload!)
      const hsvToRgbResult = HSVToRGB(hsv)
      const hsvToHexResult = HSVToHEX(hsv)
      const hsvToHslResult = HSVToHSL(hsv)
      return {
        ...state,
        HSV: { ...state.HSV },
        RGB: { ...hsvToRgbResult },
        HSL: { ...hsvToHslResult },
        HEX: hsvToHexResult,
      }
    case colorCode.RESET:
      return { ...initialColorState }

    default:
      return { ...state }
  }
}

function managePayload(state: any, payload: payload) {
  const value = checkValue(payload.value.toString(), payload.min, payload.max)
  state[payload.name as keyof typeof state] = value
  const obj: Array<number> = Object.values(state)
  return obj
}

function checkValue(val: string, min: number, max: number) {
  if (Number(val) < min) {
    return 0
  } else if (Number(val) > max) {
    return max
  } else {
    return Number(val)
  }
}
const Colors: React.FC = () => {
  const [state, dispatch] = useReducer(colorReducer, initialColorState)
  const { selected, toggleAccordion } = useAccordion()

  const rgb = state.RGB
  const hsl = state.HSL
  const hsv = state.HSV
  const hex = state.HEX

  return (
    <div className='p-4 grid gap-4 mx-auto grid-cols-1 md:grid-cols-3'>
      <div className='col-span-2'>
        <Title>
          <>Color conversion</>
        </Title>
        <ul className='space-y-1 list-disc list-inside mb-8'>
          <li>HEX value takes 6 digits (rrggbb).</li>
          <li>RGB values are on range [0-255].</li>
          <li>
            HSV values are on range [0-360] for hue, [0-100] for saturation and
            [0-100] for value.
          </li>
          <li>
            HSL values are on range [0-360] for hue, [0-100] for saturation and
            [0-100] for lightness.
          </li>
        </ul>
        <Conversor>
          <Conversor.Group type={colorCode.HEX} title={colorCode.HEX}>
            <Conversor.InputText
              name={colorCode.HEX}
              value={hex}
              type={colorCode.HEX}
              max={6}
              dispatch={dispatch}
            />
          </Conversor.Group>
          <Conversor.Group
            title={colorCode.RGB + ' (R,G,B)'}
            type={colorCode.RGB}
          >
            <Conversor.InputNumber
              name='r'
              value={rgb.r}
              max={255}
              type={colorCode.RGB}
              dispatch={dispatch}
            />
            <Conversor.InputNumber
              name='g'
              value={rgb.g}
              max={255}
              type={colorCode.RGB}
              dispatch={dispatch}
            />
            <Conversor.InputNumber
              name='b'
              value={rgb.b}
              max={255}
              type={colorCode.RGB}
              dispatch={dispatch}
            />
          </Conversor.Group>
          <Conversor.Group
            title={colorCode.HSV + ' (H,S,V)'}
            type={colorCode.HSV}
          >
            <Conversor.InputNumber
              name='h'
              value={hsv.h}
              max={360}
              type={colorCode.HSV}
              dispatch={dispatch}
            />
            <Conversor.InputNumber
              name='s'
              value={hsv.s}
              max={100}
              type={colorCode.HSV}
              dispatch={dispatch}
            />
            <Conversor.InputNumber
              name='v'
              value={hsv.v}
              max={100}
              type={colorCode.HSV}
              dispatch={dispatch}
            />
          </Conversor.Group>
          <Conversor.Group
            type={colorCode.HSL}
            title={colorCode.HSL + ' (H,S,L)'}
          >
            <Conversor.InputNumber
              name='h'
              value={hsl.h}
              max={360}
              type={colorCode.HSL}
              dispatch={dispatch}
            />
            <Conversor.InputNumber
              name='s'
              value={hsl.s}
              max={100}
              type={colorCode.HSL}
              dispatch={dispatch}
            />
            <Conversor.InputNumber
              name='l'
              value={hsl.l}
              max={100}
              type={colorCode.HSL}
              dispatch={dispatch}
            />
          </Conversor.Group>
          <div className='acc-container'>
            <p className='m-2 font-bold'>Color preview:</p>
            <div
              style={{ backgroundColor: `#${state.HEX}` }}
              className='w-full h-32 rounded-lg'
            ></div>
          </div>

          <div className='text-right'>
            <button
              className='relative inline-flex items-center justify-center p-0.5 my-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 '
              onClick={e => {
                e.preventDefault()
                dispatch({ type: colorCode.RESET })
              }}
            >
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-90 group-focus:bg-opacity-90'>
                Reset
              </span>
            </button>
          </div>
        </Conversor>
      </div>
      <div className='mt-4'>
        <h3 className='bold text-2xl mb-4'>How to: </h3>
        <AccordionItem
          title={'RGB to HEX / HEX to RGB'}
          toggle={toggleAccordion}
          selected={selected}
        >
          <div className='acc-container'>
            <p className='acc-accent'>HEX color</p>
            <p>Hex color code is a 6 digits hexadecimal (base 16) number:</p>
            <p className='acc-italic'>
              RRGGBB<sub>16</sub>
            </p>
            <p>The 2 left digits represent the red color.</p>
            <p>The 2 middle digits represent the green color.</p>
            <p>The 2 right digits represent the blue color.</p>
          </div>
          <div className='acc-container'>
            <p className='acc-accent'>RGB color</p>
            <p>
              The RGB color is a combination of <strong>R</strong>ed,{' '}
              <strong>G</strong>reen and <strong>B</strong>lue colors:
            </p>
            <div className='acc-quote'>
              <p className='acc-italic'>(R, G, B)</p>
            </div>
            <p>
              The red, green and blue use 8 bits each, which have integer values
              from 0 to 255. So the number of colors that can be generated is:
            </p>
            <div className='acc-quote'>
              <p className='acc-italic'>
                256×256×256 = 16777216 = 1000000<sub>16</sub>
              </p>
            </div>
          </div>
          <div className='acc-container'>
            <p className='acc-accent'>Hex to RGB conversion</p>
            <ul className='space-y-1 list-disc list-inside mb-8'>
              <li>
                Get the 2 left digits of the hex color code and convert to
                decimal value to get the red color level.
              </li>
              <li>
                Get the 2 middle digits of the hex color code and convert to
                decimal value to get the green color level.
              </li>
              <li>
                Get the 2 right digits of the hex color code and convert to
                decimal value to get the blue color level.
              </li>
            </ul>
          </div>
          <div className='acc-container'>
            <p className='acc-accent'>RGB to HEX conversion</p>
            <ul className='space-y-1 list-disc list-inside mb-8'>
              <li>
                Convert the red, green and blue color values from decimal to
                hexadecimal.
              </li>
              <li>
                Concatenate the hex values of the red, green and blue together.
              </li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem
          title={'RGB to HSV / HSV to RGB'}
          toggle={toggleAccordion}
          selected={selected}
        >
          <div className='acc-container'>
            <p className='acc-accent'>RGB to HSV formula:</p>
            <p>
              The R,G,B values are divided by 255 to change the range from
              [0,255] to [0,1]
            </p>
            <div className='acc-quote'>
              <p className='acc-italic'>R' = R/255</p>
              <p className='acc-italic'>G`= G/255</p>
              <p className='acc-italic'>B`= B/255</p>
              <p className='acc-italic'>Cmax = max(R', G', B')</p>
              <p className='acc-italic'>Cmin = min(R', G', B')</p>
              <p className='acc-italic'>Δ = Cmax - Cmin</p>
            </div>
            <p>Hue calculation:</p>
            <div className='acc-quote'>
              <p className='acc-italic'>if Δ = 0 {'=>'} H = 0</p>
              <p className='acc-italic'>
                if Cmax = R' {'=>'} H = 60º x (G' - B')/Δ
              </p>
              <p className='acc-italic'>
                if Cmax = G' {'=>'} H = 2 + 60º x (B' - R')/Δ
              </p>
              <p className='acc-italic'>
                if Cmax = B' {'=>'} H = 4 + 60º x (R' - B')/Δ
              </p>
            </div>
            <p>Saturation calculation:</p>
            <div className='acc-quote'>
              <p className='acc-italic'>if Cmax = 0 {'=>'} S = 0</p>
              <p className='acc-italic'>if Cmax &#8800; 0 {'=>'} S = Δ/Cmax</p>
              <p>Value calculation:</p> <p className='italic'>V = Cmax</p>
            </div>
          </div>
          <div className='acc-container'>
            <p className='acc-accent'>HSV to RGB formula:</p>
            <p>
              HSV values are on [0,360], [0,1] and [0,1] ranges respectively.
            </p>
            <div className='acc-quote'>
              <p className='acc-italic'>C = V × S</p>
              <p className='acc-italic'>X = C × (1 - |(H / 60°) mod 2 - 1|)</p>
              <p className='acc-italic'>m = V - C</p>
              <p className='acc-italic'>
                0º &#8924; H {'<'} 60º {'=>'} (R', G', B') = (C, X, 0){' '}
              </p>
              <p className='acc-italic'>
                60º &#8924; H {'<'} 120º {'=>'} (R', G', B') = (X, C, 0){' '}
              </p>
              <p className='acc-italic'>
                120º &#8924; H {'<'} 180º {'=>'} (R', G', B') = (0, C, X){' '}
              </p>
              <p className='acc-italic'>
                180º &#8924; H {'<'} 240º {'=>'} (R', G', B') = (0, X, C){' '}
              </p>
              <p className='acc-italic'>
                240º &#8924; H {'<'} 300º {'=>'} (R', G', B') = (X, 0, C){' '}
              </p>
              <p className='acc-italic'>
                300º &#8924; H {'<'} 360º {'=>'} (R', G', B') = (C, 0, X){' '}
              </p>
              <p className='acc-italic'>
                (R,G,B) = ((R'+m)×255, (G'+m)×255, (B'+m)×255)
              </p>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          title={'RGB to HSL / HSL to RGB'}
          toggle={toggleAccordion}
          selected={selected}
        >
          <div className='acc-container'>
            <p className='acc-accent'>RGB to HSL formula:</p>
            <p>
              The R,G,B values are divided by 255 to change the range from
              [0,255] to [0,1]
            </p>
            <div className='acc-quote'>
              <p className='acc-italic'>R' = R/255</p>
              <p className='acc-italic'>G`= G/255</p>
              <p className='acc-italic'>B`= B/255</p>
              <p className='acc-italic'>Cmax = max(R', G', B')</p>
              <p className='acc-italic'>Cmin = min(R', G', B')</p>
              <p className='acc-italic'>Δ = Cmax - Cmin</p>
            </div>
            <p>Hue calculation:</p>
            <div className='acc-quote'>
              <p className='acc-italic'>if Δ = 0 {'=>'} H = 0</p>
              <p className='acc-italic'>
                if Cmax = R' {'=>'} H = 60º x (G' - B')/Δ
              </p>
              <p className='acc-italic'>
                if Cmax = G' {'=>'} H = 2 + 60º x (B' - R')/Δ
              </p>
              <p className='acc-italic'>
                if Cmax = B' {'=>'} H = 4 + 60º x (R' - B')/Δ
              </p>
            </div>
            <p>Saturation calculation:</p>
            <div className='acc-quote'>
              <p className='acc-italic'>if Δ = 0 {'=>'} S = 0</p>
              <p className='acc-italic'>
                if Δ {'<>'} 0 {'=>'} S = Δ / (1 - 2L -1|){' '}
              </p>
            </div>

            <p>Lightness calculation:</p>
            <div className='acc-quote'>
              <p className='acc-italic'>L = (Cmax + Cmin) / 2</p>
            </div>

            <div className='acc-container'>
              <p className='acc-accent'>HSL to RGB formula:</p>
              <p>
                HSL values are on [0,360], [0,1] and [0,1] ranges respectively.
              </p>
              <div className='acc-quote'>
                <p className='acc-italic'>C = (1 - |2L - 1|) × S</p>
                <p className='acc-italic'>
                  X = C × (1 - |(H / 60°) mod 2 - 1|)
                </p>
                <p className='acc-italic'>m = L - C/2</p>
                <p className='acc-italic'>
                  0º &#8924; H {'<'} 60º {'=>'} (R', G', B') = (C, X, 0){' '}
                </p>
                <p className='acc-italic'>
                  60º &#8924; H {'<'} 120º {'=>'} (R', G', B') = (X, C, 0){' '}
                </p>
                <p className='acc-italic'>
                  120º &#8924; H {'<'} 180º {'=>'} (R', G', B') = (0, C, X){' '}
                </p>
                <p className='acc-italic'>
                  180º &#8924; H {'<'} 240º {'=>'} (R', G', B') = (0, X, C){' '}
                </p>
                <p className='acc-italic'>
                  240º &#8924; H {'<'} 300º {'=>'} (R', G', B') = (X, 0, C){' '}
                </p>
                <p className='acc-italic'>
                  300º &#8924; H {'<'} 360º {'=>'} (R', G', B') = (C, 0, X){' '}
                </p>
                <p className='acc-italic'>
                  (R,G,B) = ((R'+m)×255, (G'+m)×255, (B'+m)×255)
                </p>
              </div>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          title={'HEX to HSV / HSV to HEX'}
          toggle={toggleAccordion}
          selected={selected}
        >
          <div className='acc-container'>
            The easiest and more straighforward method is to transform the
            HEX/HSV values to RGB as a proxy and back to the desired code color
          </div>
        </AccordionItem>

        <AccordionItem
          title={'HEX to HSL / HSL to HEX'}
          toggle={toggleAccordion}
          selected={selected}
        >
          <div className='acc-container'>
            The easiest and more straighforward method is to transform the
            HEX/HSL values to RGB as a proxy and back to the desired code color
          </div>
        </AccordionItem>

        <AccordionItem
          title={'HSV to HSL / HSL to HSV'}
          toggle={toggleAccordion}
          selected={selected}
        >
          <div className='acc-container'>
            <p className='acc-accent'>HSV to HSL formula:</p>
            <p>
              HSV values are on H = [0,360], S = [0,1] and V = [0,1] ranges
              respectively.
            </p>
            <div className='acc-quote'>
              <p className='acc-italic'>
                H<sub>HSL</sub> = H<sub>HSV</sub>
              </p>
              <p className='acc-italic'>L = ((2 - S) * V) / 2</p>
              <p className='acc-italic'>
                if L = 0 {'=>'} S<sub>HSL</sub> = S<sub>HSV</sub>
              </p>
              <p className='acc-italic'>
                if L = 1 {'=>'} S<sub>HSL</sub> = 0
              </p>
              <p className='acc-italic'>
                if 0 ⋜ L {'<'} 0.5 {'=>'} S<sub>HSL</sub> = (SS<sub>HSV</sub> *
                V) / (L * 2)
              </p>
              <p className='acc-italic'>
                if 0.5 ⋜ L {'<'} 1 {'=>'} S<sub>HSL</sub> = (SS<sub>HSV</sub> *
                V) / (2 - L * 2)
              </p>
            </div>
          </div>
          <div className='acc-container'>
            <p className='acc-accent'>HSL to HSV formula:</p>
            <p>
              HSL values are on H = [0,360], S = [0,1] and L = [0,1] ranges
              respectively.
            </p>
            <div className='acc-quote'>
              <p className='acc-italic'>
                H<sub>HSV</sub> = H<sub>HSL</sub>
              </p>
              <p className='acc-italic'>
                V = L + S<sub>HSL</sub> x Min(L, 1 - L)<sub>HSL</sub>
              </p>
              <p className='acc-italic'>
                if V = 0 {'=>'} S<sub>HSV</sub> = 0
              </p>
              <p className='acc-italic'>
                if V ≠ 0 {'=>'} S<sub>HSV</sub> = 2 -2L/V
              </p>
            </div>
          </div>
        </AccordionItem>
      </div>
    </div>
  )
}

export default Colors
