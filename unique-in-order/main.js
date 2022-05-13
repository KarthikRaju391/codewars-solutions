var uniqueInOrder=function(iterable){
   // Pseudo Code
   // Convert the string to an array
   let arr = []
   if(typeof iterable !== "object"){
     arr = iterable.split('')
   } else {
     arr = [...iterable]
   }
   // Check every char in the array with the prev value
   let newArr = []
   arr.forEach((char, i) => {
     if(arr[i+1] !== char){
       newArr.push(char)
     }
   })
   return newArr
   // If same, ignore. Else, push it the result array
 }
 
 // PREP
 // Parameters = string sequence
 // Returns = array of chars
 // Example = ('AAAABBCCCCDAAABB') => ['A', B, C, D, A, B]