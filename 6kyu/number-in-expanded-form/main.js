function expandedForm(num) {
   return num.toString() // 70304
      .split("") //['7', '0', '3', '0', '4']
      .reverse() //['4', '0', '3', '0', '7']
      .map((a, i) => a * Math.pow(10, i)) //['4', '0', '300' + '0' + '70000']
      .filter(a => a > 0) //['4', '300', '70000']
      .reverse() //['70000', '300', '4']
      .join(" + "); // '70000 + 300 + 4'
}