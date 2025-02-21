// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
  {
    nome: "bianca",
    peso: 3,
  },
  {
    nome: "rossa",
    peso: 2,
  },
  {
    nome: "verde",
    peso: 5,
  },
  {
    nome: "blu",
    peso: 7,
  },
  {
    nome: "nera",
    peso: 4,
  },
];

let minPeso = bici[0].peso;
let biciLeggera = bici[0];

for (let i = 1; i < bici.length; i++) {
  minPeso = Math.min(minPeso, bici[i].peso);
}

for (let i = 0; i < bici.length; i++) {
  if (bici[i].peso === minPeso) {
    biciLeggera = bici[i];
    break;
  }
}
console.log(biciLeggera);

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
