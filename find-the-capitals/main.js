var capitals = function (word) {
   let wordArr = word.split('')
   let capInd = []
   wordArr.forEach((x, i) =>{
     if(x === x.toUpperCase()){
       capInd.push(i)
     }
   })
   return capInd
 };