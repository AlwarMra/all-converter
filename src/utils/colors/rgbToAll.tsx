//RGB TO =>
function RGBToHex(rgb: Array<number>) {
  let r = rgb[0].toString(16),
    g = rgb[1].toString(16),
    b = rgb[2].toString(16)

  if (r.length == 1) r = '0' + r
  if (g.length == 1) g = '0' + g
  if (b.length == 1) b = '0' + b

  return r + g + b
}

function RGBToHSL(rgb: Array<number>) {
  const rgbCopy = [...rgb]
  let r = (rgbCopy[0] /= 255)
  let g = (rgbCopy[1] /= 255)
  let b = (rgbCopy[2] /= 255)

  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0

  if (delta == 0) h = 0
  else if (cmax == r) h = ((g - b) / delta) % 6
  else if (cmax == g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)
  if (h < 0) h += 360

  l = (cmax + cmin) / 2
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +Math.round(s * 100).toFixed(1)
  l = +Math.round(l * 100).toFixed(1)

  return { h, s, l }
}

function RGBToHSV(rgb: Array<number>) {
  const rgbCopy = [...rgb]
  let r = (rgbCopy[0] /= 255)
  let g = (rgbCopy[1] /= 255)
  let b = (rgbCopy[2] /= 255)

  var h = 0
  var s = 0
  var v = 0

  var minRGB = Math.min(r, Math.min(g, b))
  var maxRGB = Math.max(r, Math.max(g, b))

  // Black-gray-white
  if (minRGB == maxRGB) {
    v = Math.round(minRGB)
    return { h: 0, s: 0, v }
  }

  // Colors other than black-gray-white:
  var d = r == minRGB ? g - b : b == minRGB ? r - g : b - r
  var h = r == minRGB ? 3 : b == minRGB ? 1 : 5
  h = Math.round(60 * (h - d / (maxRGB - minRGB)))
  s = Math.round(((maxRGB - minRGB) / maxRGB) * 100)
  v = Math.round(maxRGB * 100)
  return { h, s, v }
}
export { RGBToHSL, RGBToHSV, RGBToHex }
