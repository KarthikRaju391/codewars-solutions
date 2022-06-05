function digPow(n, p) {
   //Parameters: Number n which is splitted into digits 
   //            Number p defines the start of successive powers for above defined digits
   //Returns: A Number k f it exists, such that the sum of the digits of n
   //         taken to the successive powers of p is equal to k * n

   //Pseudocode:

   // Split n into single digits and store it in an array
   let nArr = n.toString().split('').map(Number)

   // Get the sum of the above digits with the successive powers p
   let sumOfN = 0;
   for (let i = 0; i < nArr.length; i++) {
      sumOfN += Math.pow(nArr[i], p)
      p++
   }

   // Check if there exists a k 
   let flag = 1
   while (!(n * flag > sumOfN)) {
      if (n * flag === sumOfN) {
         return flag
      }
      flag++
   }
   return -1
}