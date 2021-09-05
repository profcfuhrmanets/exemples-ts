
const input = [
    {'name':'Marie', 'job': 'programmer'},
    {'name':'Fred', 'job': 'tester'},
    {'name':'Emily', 'job': 'programmer'},
    {'name':'Jane', 'job': 'manager'},
    {'name':'Pierre', 'job': 'programmer'},
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
