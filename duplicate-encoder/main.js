function duplicateEncode(word){
   let wordsArr = word.toLowerCase().split('');
   let repeated = [];
   for(let i = 0; i < wordsArr.length; i++) {
     for(let j = i+1; j < wordsArr.length; j++) {
       if(wordsArr[j] === wordsArr[i] && !repeated.includes(wordsArr[j])) {
         repeated.push(wordsArr[j])
       }    
     }
   }
   return wordsArr.map(word => repeated.includes(word) ? ')' : '(' ).join('')
 }