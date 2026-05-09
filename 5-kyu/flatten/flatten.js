function flatten(...args) {
  const result = []
  const stack = [...args]
  
  while(stack.length > 0){
    const value = stack.pop()
    if(Array.isArray(value)){
      
      stack.push(...value)
    }else{
      result.push(value)
    }
  }
  return result.reverse()
}