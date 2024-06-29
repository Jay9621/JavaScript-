// const userEmail = "j@gmail.com"

// if (userEmail) {
//     console.log("Have Email ");
// }else{
//     console.log("Do not have Email");
// }
// output: Have Email

// const userEmail = " "

// if (userEmail) {
//     console.log("Have Email ");
// }else{
//     console.log("Do not have Email");
// }
// output: Do not have Email

//falsy values: 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// others are truthy values
// also truthy: "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is Empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty");
// }

// Nullish Coalescing Operator (??) : null , undefined

// let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
// val1 = null ?? 10 ?? 15 // 10

// Terniary Operator

//condition ? true : false

const isprice = 100

isprice <= 80 ? console.log("less than 80") : console.log("More than 80");



