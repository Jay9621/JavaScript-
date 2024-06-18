//# Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const id2 = Symbol('123')
const bigNumber = 1234567891234565788522n

console.log(id === id2);


//# Reference(non primitive)
// Array, Objects, Functions

const heros = ["iron man", "shaktman", "lokey"]

//object

let myObj = {
    name: "Jay",
    age: 22,
}

const myFunction = function(){

    console.log("Hello Word")

}

// datatype of null is object
// datatype of function is function or function object

