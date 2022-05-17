function order(words) {

   let wordsArr = words.split(" ")

   let sorted = wordsArr.map(str => {
      return str.split('').find(num => +num / 1 === +num)
   }).sort((a, b) => a - b)

   let finalArr = []
   for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < wordsArr.length; j++) {
         if (wordsArr[j].includes(sorted[i])) {
            finalArr.push(wordsArr[j])
         }
      }
   }

   return finalArr.join(" ")
}
