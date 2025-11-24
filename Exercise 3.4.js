function minMaxArray(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  console.log("Minimum: " + min);
  console.log("Maximum: " + max);
}

minMaxArray([1, 2, 3, 4, 5]);  

