function flatten(...args) {
    const result = [];
  function helper (arr){
    for(const item of arr){
      if(Array.isArray(item)){
        helper(item)
      }else{
        result.push(item)
      }
    }
  }
  helper(args)
  return result
}