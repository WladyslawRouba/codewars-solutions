function deepCompare(a, b) {
  if( a === b){
    return true
  }
  if( typeof a !== typeof b){
    return false
  }
  if(a === null || b === null){
    return false
  }
  if(typeof a !== 'object'){
    return false
  }
  if(Array.isArray(a) !== Array.isArray(b)){
    return false
  }
  const keyA = Object.keys(a)
  const keyB = Object.keys(b)
  
  if(keyA.length !== keyB.length){
    return false
  }
  for(let key of keyA){
    if(!b.hasOwnProperty(key)){
      return false
    }
    if(!deepCompare(a[key], b[key])){
      return false
    }
​
  }
  return true
  
};