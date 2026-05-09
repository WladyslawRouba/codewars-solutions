function moveZeros(arr) {
  const result = []
  let zeros = 0
  for(const item of arr){
    if(item === 0)zeros++
  else result.push(item)
  }
  return result.concat(Array(zeros).fill(0))
}