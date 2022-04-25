
const input = [
    {'name':'Marie', 'job': 'programmer', 'salary': 9000},
    {'name':'Fred', 'job': 'tester', 'salary': 4000},
    {'name':'Emily', 'job': 'programmer', 'salary': 9000},
    {'name':'Jane', 'job': 'manager', 'salary': 12000},
    {'name':'Pierre', 'job': 'programmer', 'salary': 9000},
];
const names = [];

// avec une boucle classique
for (const i of input) {
    if (i.job === "programmer")
      names.push(i.name);
  }

console.log('names: ' + names);

// avec la refactoring Replace Loop with Pipeline
// https://refactoring.com/catalog/replaceLoopWithPipeline.html

const otherNames = input
    .filter(i => i.job === "programmer")
    .map(i => i.name)
;

console.log('otherNames: ' + otherNames);

// reduce pour calculer la somme des salaires
console.log(`sum of salary: ${input.reduce((somme, personne) => personne.salary + somme, 0)}`)
