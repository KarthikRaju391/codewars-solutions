function feast(beast, dish) {
   //your function here
   return beast.startsWith(dish.split('')[0]) && beast.endsWith(dish.split('').pop())
}