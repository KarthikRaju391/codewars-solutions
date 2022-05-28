function stray(numbers) {
   let letterCount = {}
   numbers.map(x => {
     if(x in letterCount) {
       letterCount[x]++
     } else {
       letterCount[x] = 1
     }
   })
   for(let i in letterCount) {
     if(letterCount[i] === 1){
       return Number(i)
     }
   }
 }