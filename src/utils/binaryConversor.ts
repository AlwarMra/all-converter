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

export { binaryToText, textToBinary }
