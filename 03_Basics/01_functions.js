

function sayMyName(){
console.log("j");
console.log("A");
console.log("Y");
}

// sayMyName()

// function addnumber(num1 ,num2){
//     console.log(num1 + num2)
// }

// function addnumber(num1, num2){
//     let result = num1 + num2
//     return result
// }

function addnumber(num1, num2){
    return num1 + num2
}

const result = addnumber(3, 4)
// console.log("Result: ",result);

// function loginUserMessage(username){
//     if (username === undefined){
//         console.log("Please Enter Username");
//         return           // if username is un defined so console will print and coz of return function last return line not execute Please Enter Username undefined

//     }
//     return `${username} just logged In`
// }
// function loginUserMessage(username){
//     if (!username){
//         console.log("Please Enter Username");
//         return           // if username is un defined so console will print and coz of return function last return line not execute Please Enter Username undefined

//     }
//     return `${username} just logged In`
// }

function loginUserMessage(username = "Jay"){
    if (!username){
        console.log("Please Enter Username");
        return           // if username is un defined so console will print and coz of return function last return line not execute Please Enter Username undefined

    }
    return `${username} just logged In`
}

console.log(loginUserMessage("Jay"))
console.log(loginUserMessage()); // undefined just logged in
