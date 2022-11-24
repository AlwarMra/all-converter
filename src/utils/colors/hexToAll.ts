import { RGBToHSL, RGBToHSV } from './rgbToAll'

function HEXToRGB(hex: string) {
  if (hex.length < 6) return
  let r, g, b

  let bigint = parseInt(hex, 16)
  r = (bigint >> 16) & 255
  g = (bigint >> 8) & 255
  b = bigint & 255

  return { r, g, b }
}
function HEXToHSL(hex: string) {
  let result = HEXToRGB(hex)
  return result !== undefined ? RGBToHSL(Object.values(result)) : undefined
}

function HEXToHSV(hex: string) {
  let result = HEXToRGB(hex)
  return result !== undefined ? RGBToHSV(Object.values(result)) : undefined
}

export { HEXToRGB, HEXToHSV, HEXToHSL }
