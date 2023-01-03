function binaryToText(str: string) {
  return str
    .split(' ')
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join('')
}

function textToBinary(str: string) {
  return str
    .split('')
    .map(char => {
      return char.charCodeAt(0).toString(2)
    })
    .join(' ')
}

function binaryToDecimal(str: string) {
  return parseInt(str, 2)
}
function binaryToOctal(str: string) {
  return parseInt(str, 2).toString(8)
}
function binaryToHex(str: string) {
  return parseInt(str, 2).toString(16).toUpperCase()
}
function octalToDecimal(str: string) {
  return parseInt(str, 8)
}
function octalToHex(str: string) {
  return parseInt(str, 8).toString(16).toUpperCase()
}
function octalToBinary(str: string) {
  return parseInt(str, 8).toString(2)
}
function hexToDecimal(str: string) {
  return parseInt(str, 16)
}
function hexToBinary(str: string) {
  return parseInt(str, 16).toString(2)
}
function hexToOctal(str: string) {
  return parseInt(str, 16).toString(8)
}
function decimalToBinary(str: string) {
  return Number(str).toString(2)
}
function decimalToHex(str: string) {
  return parseInt(str).toString(16).toUpperCase()
}
function decimalToOctal(str: string) {
  return parseInt(str).toString(8)
}
export {
  textToBinary,
  binaryToText,
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
}
