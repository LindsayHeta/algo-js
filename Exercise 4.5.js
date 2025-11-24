function calcDistance(A, B) {
  let dx = B[0] - A[0];
  let dy = B[1] - A[1];
  return Math.sqrt(dx * dx + dy * dy);
}

console.log(calcDistance([1, 1], [2, 2])); 
console.log(calcDistance([1, 1], [3, 1])); 
