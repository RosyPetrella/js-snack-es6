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
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
];

// genero un numero casuale

function generateRandomNumber() {
  return Math.round(Math.random() * 10);
}

console.log(generateRandomNumber());

// assegno un numero causale generato con la funzione precedente a Punti Fatti e Falli Subiti per ogni squadra

for (let i = 0; i < squadre.length; i++) {
  const thisSquadra = squadre[i];
  thisSquadra.puntiFatti = generateRandomNumber();
  thisSquadra.falliSubiti = generateRandomNumber();
}

console.log(squadre);

const squadreFallisubiti = [];

// Pusho i falli subiti  negli oggetti (?)
for (let i = 0; i < squadre.length; i++) {
  const thisSquadra = squadre[i];
  squadreFallisubiti.push({
    nome: thisSquadra.nome,
    falliSubiti: thisSquadra.falliSubiti,
  });
}

// Stampa il nuovo array con i nomi e i falli subiti
console.log(squadreFallisubiti);
