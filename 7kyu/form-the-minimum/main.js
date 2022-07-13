function minValue(values) {
  //sort and filter the array
  let sorted = values
    .sort((a, b) => a - b)
    .filter((item, pos) => values.indexOf(item) == pos);
  return Number(sorted.join(''));
}
