// if

// == check equality
// === also check type
// !== opposite of ===
// const isUserLoggedIn = true
// const temp = 41

// if(isUserLoggedIn == true){
//     console.log("Logged In");

// }
// else{
// console.log("Not Logged In");
// }

// const score = 200

// if(score > 100){
//  const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000

//if (balance > 500) console.log("test"), console.log("test2"); not a good practice

// if (balance < 500){
//     console.log("less than 500");

// } else if (balance < 750){
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (isUserLoggedIn && debitCard){
    console.log("Allow");
}

if (loggedInfromGoogle || loggedInfromEmail){
    console.log("loggedIn");
}