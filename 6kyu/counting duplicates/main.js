function duplicateCount(text) {
   let newText = text.toLowerCase().split('')
   let repeated = {}
   let duplicates = 0

   newText.forEach(letter => {
      if (repeated[letter]) {
         repeated[letter]++
      } else {
         repeated[letter] = 1
      }
   })

   for (let i in repeated) {
      if (repeated[i] > 1) duplicates++
   }
   return duplicates
}