let p = { a: 1, b: { c: 2 } };

let copyP = structuredClone(p)
OR
let copyP1 = JSON.parse(JSON.stringify(p))

copyP.b.c = 100;

console.log(p);     // 2 (original not affected)
console.log(copyP); // 100