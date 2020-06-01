let maMap = new Map<number, string>();
maMap.set(77,'Poisson');
maMap.set(22,'Citron');
console.log(maMap); // Map { 77 => 'Poisson', 22 => 'Citron' }

maMap.has(77);    // true
maMap.delete(22); // true

console.log(maMap); // Map { 77 => 'Poisson' }

console.log(maMap.get(77)); // Poisson
console.log(maMap.get(22)); // undefined