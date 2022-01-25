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

export const calculateSkiLength = (age, inLength, style) => {
  
  // nobody is les then 3cm or longer then 3 meters
  const length = Number(inLength) < 3 && String(inLength).length > 1 ? inLength * 100 : inLength
  
  if (age <= 4 ) {
    const skiLength = Math.min(Number(length), style === 'classic' ? classicSkiMaxLength :freestyleSkiMaxLength)
    return [skiLength, 0]
  }
  if( age <= 8) {
    const skiLength = Math.min(Number(length) + FiveToEightSkiLengthAdd, classicSkiMaxLength)
    return [skiLength, skiLengthDiff(skiLength, style === 'classic' ? classicSkiMaxLength: freestyleSkiMaxLength, FiveToEightSkiLengthDiff)]
  }
  if(style === 'classic') {
    return [Math.min(Number(length) + classicSkiMaxLengthAdd, classicSkiMaxLength), 0]
  }
  if(style === 'freestyle') {
    const skiLength = Math.min(Number(length) + freestyleSkiMaxLengthAdd, freestyleSkiMaxLength)
    return [skiLength, skiLengthDiff(skiLength, freestyleSkiMaxLength, freestyleSkiLengthDiff)]
  }
  return null
}

export const skiLengthDiff = (skiLength, maxLength, maxDiff) => {
  return skiLength >= maxLength - maxDiff ? Math.max(maxLength - skiLength, 0) : maxDiff 
}