function gimme(triplet) {
   let newArr = [...triplet]
   let middleElement = newArr.sort((a, b) => a - b)[1]
   return triplet.indexOf(triplet.find(x => x === middleElement))
}