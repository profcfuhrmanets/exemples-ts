const valeurs = [65, 44, 12, 4];
console.log(valeurs);
console.log(valeurs.map(v => v + 2 ));

// tableau d'objets
const persons = [
    { prénom: "Jean", nom: "Latour" },
    { prénom: "Alicia", nom: "Tremblay" },
    { prénom: "Marc", nom: "Smith" }
];

// function getNomComplet(élément) {
//     var nomComplet = [élément.prénom, élément.nom].join(" ");
//     return nomComplet;
// }

// console.log(persons.map(getNomComplet));

console.log(persons.map(élément => [élément.prénom, élément.nom].join(" ")));

