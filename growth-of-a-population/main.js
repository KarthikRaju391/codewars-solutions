function nbYear(p0, percent, aug, p) {
 let year = 0;
 while(p0 < p) {
   p0 += Math.floor(p0 * (percent/100) + aug) // The Math.floor is the catch, because you can't have decimal values for number of people!!
   year++
 }
 return year
}