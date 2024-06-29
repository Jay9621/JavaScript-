// const user = {
//     username: "Jay",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Jay"
//     console.log(this);
// }
// chai()

// const chai = function () {
//     let username = "jay"
//     console.log(this.username);          
// }

// chai()

// const chai =  () => {
//     let username = "jay"
//     console.log(username);          
// }

// console.log(chai);

// arrow function syntax = () => {}

/////////Explicit return ////////////

    // const addTwo = (num1, num2 ) => {
    //     return num1 + num2
    // }
    // console.log(addTwo(3,4));

////implicit return////
    // const addTwo = (num1, num2 ) =>  num1 + num2
    
    // console.log(addTwo(3,4));

    // const addTwo = (num1, num2) => (num1, num2)

    // const addTwo = (num1, num2) => ({username: "jay"})

    const myArray = [2, 5, 5]

    myArray.forEach(function () {})
    myArray.forEach(() => {})

