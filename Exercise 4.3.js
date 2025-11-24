function multiRand(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(rand10());
  }
  return arr;
}

let n = parseInt(prompt("Combien de nombres aléatoires voulez-vous générer ?"));
console.log(multiRand(n));
