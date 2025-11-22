let n = parseInt(prompt("Combien de nombres voulez-vous entrer ?"), 10);

let sum = 0; 

for (let i = 1; i <= n; i++) {
  let num = Number(prompt("Entrez le nombre " + i + " :"));
  sum += num; // ajoute le nombre à la somme
}

alert("La somme de tous les nombres est : " + sum);
