// const marvel_heros  = ["thor", "iron man", "spider man"]
// const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc);

// // console.log(marvel_heros); // [ 'thor', 'iron man', 'spider man', [ 'superman', 'flash', 'batman' ] ] it take dc array as single data 

// // console.log(marvel_heros[3][1]); // flash in 3rd element giver 1 array

// marvel_heros.concat(dc)
// // console.log(marvel_heros); 


const a = ["A", "B", "C"]
const b = ["D", "E"]

// c = a.concat(b) // to metge the array [ 'A', 'B', 'C', 'D', 'E' ]
// console.log(c);

// const all_new_heros = [...a,...b]
// console.log(all_new_heros); //[ 'A', 'B', 'C', 'D', 'E' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

Array.isArray("Jay")
console.log(Array.isArray("Jay"));
console.log(Array.from("Jay"));

console.log(Array.from({name: "jay"})); // gives empty array ///intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
