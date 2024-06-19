console.log(2 > 1);
console.log(2 >= 1);
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// equality check == and comparsion > < >= <=works differently. 
//comparision convert null to number, treating it as 0.

// strict check === its also check datatype

console.log("2" === 2);