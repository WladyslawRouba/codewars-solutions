function sumPairs(arr, target) {
  const seen = new Set();
 
​
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
   
​
    const complement = target - num;
    
​
    if (seen.has(complement)) {
      
​
      return [complement, num];
  
    }
​
    seen.add(num);
​
  }
​
  return undefined;
  
}