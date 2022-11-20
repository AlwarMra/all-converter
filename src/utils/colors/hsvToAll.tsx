//HSV TO =>

import { RGBToHex } from './rgbToAll'

function HSVToRGB(hsv: Array<number>) {
  const hsvCopy = [...hsv]
  console.log(hsv)
  let h = hsvCopy[0]
  let s = (hsvCopy[1] /= 100)
  let v = (hsvCopy[2] /= 100)
  var r, g, b

  let f = (n: number, k = (n + h / 60) % 6) =>
    v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)

  r = Math.round(f(5) * 255)
  g = Math.round(f(3) * 255)
  b = Math.round(f(1) * 255)

  return { r, g, b }
}
function HSVToHSL(hsv: Array<number>) {
  const hsvCopy = [...hsv]
  let h = hsvCopy[0]
  let s = hsvCopy[1] / 100
  let v = hsvCopy[2] / 100

  var l = ((2 - s) * v) / 2

  if (l != 0) {
    if (l == 1) {
      s = 0
    } else if (l < 0.5) {
      s = (s * v) / (l * 2)
    } else {
      s = (s * v) / (2 - l * 2)
    }
  }

  s = Math.round(s * 100)
  l = Math.round(l * 100)

  return { h, s, l }
}

function HSVToHEX(hsv: Array<number>) {
  const hsvCopy = [...hsv]
  let result = HSVToRGB(hsvCopy)
  return RGBToHex(Object.values(result))
}

export { HSVToRGB, HSVToHSL, HSVToHEX }
