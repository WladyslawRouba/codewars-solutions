function validBraces(braces){
  const stack = []
  
  const map ={
    ']': '[',
     '}': '{',
     ')': '('
  }
  for(let char of braces){
    if(char === '{' || char === '(' || char === '['){
      stack.push(char)
    }
    if(char === '}' || char === ')' || char === ']'){
      const last = stack.pop()
      if(last !== map[char]){
        return false
      }
     }   
  }
  return stack.length === 0
}