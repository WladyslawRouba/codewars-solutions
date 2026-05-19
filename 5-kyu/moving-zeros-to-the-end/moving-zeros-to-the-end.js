function moveZeros(arr) {
  let insertIndex = 0
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      arr[insertIndex] = arr[i]
      insertIndex++
    }
    
  }
  while(insertIndex < arr.length){
    arr[insertIndex] = 0
    insertIndex++
    
  }
  return arr
}