function cache(fn) {
 const cacheResult = new Map()
 return function(...args){
   const key = JSON.stringify(args)
   if(cacheResult.has(key)){
     return cacheResult.get(key)
   }
   
   const result = fn(...args)
   cacheResult.set(key, result)
   return result
   
 }
  
}