import { lengthCode } from '../typescript/enums'

function calcLengths(start: string, end: string, value: number): number {
  if (start === end) return value
  //Milimeter
  if (start === lengthCode.MM) {
    if (end === lengthCode.CM) return value / 10
    if (end === lengthCode.M) return value / 1000
    if (end === lengthCode.KM) return value / 1000000
    if (end === lengthCode.INCH) return value * 0.0393701
    if (end === lengthCode.FOOT) return value * 0.000328084
    if (end === lengthCode.YARD) return value * 0.000109361
    if (end === lengthCode.MILE) return value * 0.000000062137
  }
  //Centimeter
  if (start === lengthCode.CM) {
    if (end === lengthCode.MM) return value * 10
    if (end === lengthCode.M) return value / 100
    if (end === lengthCode.KM) return value / 100000
    if (end === lengthCode.INCH) return value * 0.393701
    if (end === lengthCode.FOOT) return value * 0.0328084
    if (end === lengthCode.YARD) return value * 0.0109361
    if (end === lengthCode.MILE) return value * 0.0000062137
  }
  //Meter
  if (start === lengthCode.M) {
    if (end === lengthCode.MM) return value * 1000
    if (end === lengthCode.CM) return value * 100
    if (end === lengthCode.KM) return value / 1000
    if (end === lengthCode.INCH) return value * 39.3701
    if (end === lengthCode.FOOT) return value * 3.28084
    if (end === lengthCode.YARD) return value * 1.09361
    if (end === lengthCode.MILE) return value * 0.000621371
  }
  //Kilometer
  if (start === lengthCode.KM) {
    if (end === lengthCode.M) return value * 1000
    if (end === lengthCode.CM) return value * 100000
    if (end === lengthCode.MM) return value * 1000000
    if (end === lengthCode.INCH) return value * 39370.1
    if (end === lengthCode.FOOT) return value * 3280.84
    if (end === lengthCode.YARD) return value * 1093.61
    if (end === lengthCode.MILE) return value * 0.621371
  }
  // Inch
  if (start === lengthCode.INCH) {
    if (end === lengthCode.MM) return value * 25.4
    if (end === lengthCode.CM) return value * 2.54
    if (end === lengthCode.M) return value * 0.0254
    if (end === lengthCode.KM) return value * 0.0000254
    if (end === lengthCode.FOOT) return value * 0.833
    if (end === lengthCode.YARD) return value * 0.0278
    if (end === lengthCode.MILE) return value * 0.0000157
  }
  // Foot
  if (start === lengthCode.FOOT) {
    if (end === lengthCode.MM) return value * 304.8
    if (end === lengthCode.CM) return value * 30.48
    if (end === lengthCode.M) return value * 0.03048
    if (end === lengthCode.KM) return value * 0.0003048
    if (end === lengthCode.INCH) return value * 12
    if (end === lengthCode.YARD) return value * 0.3333
    if (end === lengthCode.MILE) return value * 0.000189394
  }
  // Yard
  if (start === lengthCode.YARD) {
    if (end === lengthCode.MM) return value * 914.4
    if (end === lengthCode.CM) return value * 91.44
    if (end === lengthCode.M) return value * 0.9144
    if (end === lengthCode.KM) return value * 0.0009144
    if (end === lengthCode.INCH) return value * 36
    if (end === lengthCode.FOOT) return value * 3
    if (end === lengthCode.MILE) return value * 0.000568182
  }
  // Mile
  if (start === lengthCode.MILE) {
    if (end === lengthCode.MM) return value * 1609344
    if (end === lengthCode.CM) return value * 160934.4
    if (end === lengthCode.M) return value * 1609.34
    if (end === lengthCode.KM) return value * 1.60934
    if (end === lengthCode.INCH) return value * 63360
    if (end === lengthCode.FOOT) return value * 5280
    if (end === lengthCode.YARD) return value * 1766
  }
  if (!Object.keys(lengthCode).includes(start)) return NaN
  return NaN
}

export default calcLengths
