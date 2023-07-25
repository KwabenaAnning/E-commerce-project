const fullname = ["Spilo Kwabena Anjokata"];

let first=fullname.substring(0,9)
let last=fullname.substring(10)


first=(first[0].toUpperCase()+ first.slice(1));

let splitted= last.split("")
let reversed=(splitted.reverse())
let reversedLast= reversed.join("")


fullname.length
fullname.includes('a');

console.log (`reversedLastName= ${reversedLast}`)
console.log(`firstName= ${first}`);
console.log(`lastName= ${last}`);