function sumPairs(nums, target) {
  const seen = new Set();
  for(const num of nums ){
    const complement = target - num;
    if(seen.has(complement)){
      return [complement, num]
    }
     seen.add(num)
  }
  return undefined  
}