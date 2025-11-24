function pickLearner(inputAr, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * inputAr.length);
    result.push(inputAr[randomIndex]);
  }
  return result;
}

let learners = ["Alice", "Bob", "Charlie", "Diana"];
console.log(pickLearner(learners, 2));
