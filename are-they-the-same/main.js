function comp(array1, array2) {
   //your code here
   if (array1 === null || array2 === null) {
      return false
   }
   let tempArr = array1.map(x => x ** 2).sort((a, b) => a - b)
   let tempTwo = array2.sort((a, b) => a - b)

   if (JSON.stringify(tempArr) === JSON.stringify(tempTwo)) {
      return true
   } else {
      return false
   }
}