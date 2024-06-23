

// function sayMyName(){
// console.log("j");
// console.log("A");
// console.log("Y");
// }

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

// function loginUserMessage(username = "Jay"){
//     if (!username){
//         console.log("Please Enter Username");
//         return           // if username is un defined so console will print and coz of return function last return line not execute Please Enter Username undefined

//     }
//     return `${username} just logged In`
// }

// console.log(loginUserMessage("Jay"))
// console.log(loginUserMessage()); // undefined just logged in

// function calculateCartPrice(num1){
//     return num1

// } // output 200 
// function calculateCartPrice(...num1){
//     return num1

// } // [ 200, 400, 500 ] ... called rest operator
// console.log(calculateCartPrice(200, 400, 500));

// function calculateCartPrice(val1, val2, ...num1){
//     return num1

// }

// console.log(calculateCartPrice(200, 300, 500, 1000)); // [ 500, 1000 ] here val1=200 and val2=300

// const user = {
//     username:"jay",
//     price: 200
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

// }

// handleObject(user)
// /////////////////////////////////////////////////////////
// const array = [100, 200, 300]

// function returnvalue(getarray){
//     return getarray[1]

// }

// // console.log(returnvalue(array));
// console.log(returnvalue([200, 300, 500]));