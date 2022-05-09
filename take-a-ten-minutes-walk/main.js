function isValidWalk(walk) {
   //insert brilliant code here
   let nT = 0;
   let sT = 0;
   let wT = 0;
   let eT = 0;
   if (walk.length === 10) {
      walk.map(b => {
         if (b === 'n') nT++
         if (b === 's') sT++
         if (b === 'w') wT++
         if (b === 'e') eT++
      })

      if ((nT === sT) && (wT === eT)) {
         return true
      } else {
         return false
      }
   }
}