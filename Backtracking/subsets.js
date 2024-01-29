export function subsets(nums) {
  const res=[]
	let auxArr = [], i = 0
    
  function recur(nums, i, auxArr){
      if(i === nums.length) { 
        res.push(auxArr); 
        return 
      }
      
      // take it
      recur(nums, i + 1, auxArr.concat(nums[i]))
  
      // dont take
      recur(nums, i + 1, auxArr)
  
  }
  
  recur(nums, i, auxArr)
  return res
}