function reverseWords(str) {
   let splitArr = str.split(" ")
   return splitArr.map(word => {
     return word.split('').reverse().join('')
   }).join(" ")
 }