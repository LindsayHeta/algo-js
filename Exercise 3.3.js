/* function copyArrayPush(arr) {
  let copy = [];
  for (let elem of arr) {
    copy.push(elem);
  }
  return copy;
}

console.log(copyArrayPush([1, 2, 3])); */


  function copyArraySlice(arr) {
  return arr.slice(); 
}

console.log(copyArraySlice([1, 2, 3])); 