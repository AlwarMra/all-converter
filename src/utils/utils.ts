function checkValue(val: string, min: number, max: number = 0) {
  if (Number(val) < min) {
    return 0
  } else if (max > 0 && Number(val) > max) {
    return max
  } else {
    return Number(val)
  }
}

export { checkValue }
