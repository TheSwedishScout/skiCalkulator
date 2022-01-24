  /**
   * Rules
   * Recommendations when calculating ski length
   * 
   * Children 0-4 years: body length + 0 cm.
   * Children 5-8 years: body length + 10 to 20 cm.
   * Classic: body length + 20cm. Classic skis are only manufactured up to 207cm.
   * Freestyle: body length + 10 to 15 cm. Freestyle skis are only manufactured up to 192cm.
   */
  const FiveToEightSkiLengthAdd = 10
  const FiveToEightSkiLengthDiff = 10

  const classicSkiMaxLength = 207
  const classicSkiMaxLengthAdd = 20

  const freestyleSkiMaxLength = 192
  const freestyleSkiMaxLengthAdd = 10
  const freestyleSkiLengthDiff = 5

export const calculateSkiLength = (myAge, myLength, myStyle) => {
  if (myAge <= 4 ) {
    const skiLength = Math.min(Number(myLength), myStyle === 'classic' ? classicSkiMaxLength :freestyleSkiMaxLength)
    return [skiLength, 0]
  }
  if( myAge <= 8) {
    const skiLength = Math.min(Number(myLength) + FiveToEightSkiLengthAdd, classicSkiMaxLength)
    return [skiLength, skiLengthDiff(skiLength, myStyle === 'classic' ? classicSkiMaxLength: freestyleSkiMaxLength, FiveToEightSkiLengthDiff)]
  }
  if(myStyle === 'classic') {
    return [Math.min(Number(myLength) + classicSkiMaxLengthAdd, classicSkiMaxLength), 0]
  }
  if(myStyle === 'freestyle') {
    const skiLength = Math.min(Number(myLength) + freestyleSkiMaxLengthAdd, freestyleSkiMaxLength)
    return [skiLength, skiLengthDiff(skiLength, freestyleSkiMaxLength, freestyleSkiLengthDiff)]
  }
  return null
}


const skiLengthDiff = (skiLength, maxLength, maxDiff) => {
  return skiLength >= maxLength - maxDiff ? maxLength - skiLength : maxDiff 

}