function getSum(a, b) {
   // sort a and b
   let nums = [a, b].sort((a, b) => a - b)
   let newArr = []

   for (let i = nums[0]; i <= nums[1]; i++) {
      newArr.push(i)
   }
   return newArr.reduce((a, b) => a + b, 0)
}