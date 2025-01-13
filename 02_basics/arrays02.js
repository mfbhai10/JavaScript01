const marvel_heros = ["SpiderMan","IronMan","Thor"]
const dc_heros = ["BatMan","SuperMan"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][0]);

// const all_heros  = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);

const another_array = [1,2,3,[4,5],6,[7,[8,9]]]

const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Rafi"));
console.log(Array.from("Rafi"));
console.log(Array.from({name: "Rafi"}));  //It returns: []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));