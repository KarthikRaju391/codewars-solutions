function high(x) {
   let alpha = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26
   }
   let arr = x.split(" ")
   let newarr = arr.map(word => {
      return (word.split('').map(y => alpha[y]).reduce((a, b) => a + b, 0))
   })

   // finding the index of max value from the array
   let max = newarr[0]
   let maxInd = 0
   for (let i = 1; i < newarr.length; i++) {
      if (newarr[i] > max) {
         max = newarr[i]
         maxInd = newarr.indexOf(newarr[i])
      }
   }
   return arr[maxInd]
}