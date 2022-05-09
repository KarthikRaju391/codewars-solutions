function solution(string) {
   let strArr = string.split('')
   let count = 0;
   strArr.map((str, i) => {
     if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
       strArr.splice(i + count, 0 , " ")
       count++
     }
   })
   return strArr.join('')
}


// Examples
// dudeChill => dude Chill