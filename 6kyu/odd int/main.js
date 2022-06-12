function findOdd(A) {
   const repeated = {}

   A.forEach(num => {
      if (!repeated[num]) {
         repeated[num] = 1
      } else {
         repeated[num]++
      }
   })
   for (let val in repeated) {
      if (repeated[val] % 2 !== 0) {
         return Number(val)
      }
   }
   return 0;
}