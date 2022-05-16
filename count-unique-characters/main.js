function count (string) {  
   let strArr = string.split('')
   let Obj = {}
   strArr.map(x => {
     if(x in Obj) {
       Obj[x]++
     } else {
       Obj[x] = 1
     }
   })
   return Obj
 }