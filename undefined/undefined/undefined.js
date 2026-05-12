// take any number of promises for arguments
function all(...promises) {
return new Promise((resolve,reject) =>{
  const result = []
  let count = 0
  if(promises.length === 0)return resolve([])
  promises.forEach((p, i)=>{
    Promise.resolve(p)
    .then(res =>{
      result[i] = res
      count++
      if(count === promises.length){
        resolve(result)
      }
    })
     .catch(reject)
  })
 
  
})
  // return a promise
} // end all