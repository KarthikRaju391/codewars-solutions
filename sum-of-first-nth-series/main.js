// My Attempt

function SeriesSum(n)
{
  let x = 1
  let m = 4
  let y = 1/m
  let z = x + y;
  
  if(n === 0) {
    return "0.00"
  }
  if(n === 1) {
    return x.toFixed(2).toString()
  } else if(n === 2) {
    return z.toFixed(2).toString()
  } else {
    for(let i = 2; i < n; i++) {
      z += 1/(m+=3)
    }
    return z.toFixed(2).toString()
  }
}

// Alternate better solution

function SeriesSum(n)
{
  let s = 0
  for(let i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}