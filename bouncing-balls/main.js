function bouncingBall(h,  bounce,  window) {
   // your code here
   let timesSeen = -1
   if(bounce > 0 && bounce < 1){
     while(h > window) {
       timesSeen += 2
       h *= bounce
     }
   }
   return timesSeen
 }