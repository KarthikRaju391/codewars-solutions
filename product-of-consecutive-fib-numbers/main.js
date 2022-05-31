function productFib(prod){
   // generate a fibonacci series
   let f = 0;
   let s = 1;
   
   while(f * s < prod) {
     let temp = f + s; 
     f = s;
     s = temp;
     if(f * s === prod) {
       return [f , s, true ]
     }
   }
   return [f, s, false]
 }