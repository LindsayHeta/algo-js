function calcSurface(length, width) {
  return length * width;
}

let length = parseInt(prompt("Entrez la longueur du rectangle :"));
let width = parseInt(prompt("Entrez la largeur du rectangle :"));
if (isNaN(length) || isNaN(width)) {
  console.log("Veuillez entrer des nombres valides.");
} else {
  alert("Surface du rectangle : " + calcSurface(length, width));
  console.log("Surface : " + calcSurface(length, width));
}
