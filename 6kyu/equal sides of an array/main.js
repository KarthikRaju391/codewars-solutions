function findEvenIndex(arr) {
   // loop through the array
   let res;
   arr.forEach((elem, i, array) => {
      if (array.slice(0, i).reduce((a, b) => a + b, 0) === array.slice(i + 1, array.length).reduce((a, b) => a + b, 0)) {
         res = i;
         return
      }
   })
   return res >= 0 ? res : -1
}