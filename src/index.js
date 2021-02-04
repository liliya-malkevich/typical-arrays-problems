
exports.min = function min (array) {
  if(array.length == 0 ||array === undefined){
    return 0;
  }
  let n = array.length;
  let m = array[0];
  for(let i = 1;i<n;i++){
    if(m>array[i]){
      m = array[i];
    }
  }
  return m;
}

exports.max = function max (array ) {
  if(array.length == 0 || array === undefined){
    return 0;
  }
  let n = array.length;
  let m = array[0];
  for(let i = 1;i<n;i++){
    if(m<array[i]){
      m = array[i];
    }
  }
  return m;
}

exports.avg = function avg (array) {
  if(array.length == 0 || array === undefined){
    return 0;
  }
  let n = array.length;
  let a =0;
  for(let i = 0;i<n;i++){
    a += array[i];
  }
  a = a/n;
  return a;
}
