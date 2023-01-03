//HSL TO =>
function HSLtoRGB(hsl: Array<number>) {
  const hslCopy = [...hsl]
  let h = hslCopy[0]
  let s = (hslCopy[1] /= 100)
  let l = (hslCopy[2] /= 100)

  let a = s * Math.min(l, 1 - l)
  let f = (n: number, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
  const r = Math.round(f(0) * 255)
  const g = Math.round(f(8) * 255)
  const b = Math.round(f(4) * 255)

  return { r, g, b }
}

function HSLToHex(hsl: Array<number>) {
  const hslCopy = [...hsl]
  let h = hslCopy[0]
  let s = hslCopy[1]
  let l = hslCopy[2]

  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0') // convert to Hex and prefix "0" if needed
  }
  return `${f(0)}${f(8)}${f(4)}`
}

function HSLToHSV(hsl: Array<number>) {
  const hslCopy = [...hsl]
  let h = hslCopy[0]
  let s = hslCopy[1] / 100
  let l = hslCopy[2] / 100

  let v = s * Math.min(l, 1 - l) + l
  s = v ? 2 - (2 * l) / v : 0
  s = Math.round(s * 100)
  v = Math.round(v * 100)

  return { h, s, v }
}

export { HSLtoRGB, HSLToHex, HSLToHSV }
