function enough(cap, on, wait) {
   // your code here
   let newcap = cap - on;
   if(newcap < wait) {
     return wait - newcap
   } else {
     return 0
   }
 }
 