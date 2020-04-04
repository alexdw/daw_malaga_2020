export const differenceInAges = (ages) => {
  let older= Math.max(...ages)
  let joven= Math.min(...ages)
  let diferencia = older - joven
  let familyArr = []
  familyArr.push(joven, older, diferencia)
  return familyArr   
}