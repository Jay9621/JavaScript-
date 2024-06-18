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

//*************Memory*********************

//Stack (primitive type) we get a copy and change in the copy, Heap (non Primitive) change in original value

let myYoutubeName = "JayYT"
anothername = 'JKYT'

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "jay@gamil.com",
    upi: "user@ybl"
}

let usertwo = userOne
usertwo.email = "User@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);