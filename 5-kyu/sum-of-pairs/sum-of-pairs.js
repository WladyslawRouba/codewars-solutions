function sumPairs(ints, s) {
  let seen = new Set()
  
  for(let i = 0; i < ints.length; i++){
    const current = ints[i]
    const needed = s - current
    
    if(seen.has(needed)){
      return [needed, current]
    }
    seen.add(current)
  }
  return  undefined ;
}