//**********Important*************
//for each

const coding = ["js", "Python", "Java", "cpp"] 

// coding.forEach( function (item) {
//     console.log(item);

// } )

// arrow function

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

//********************************* */

const myCoding = [
    {
        lanName: "Javascript",
        lanFileName: "Js"
    },
    {
        lanName: "Python",
        lanFileName: "py"
    },
    {
        lanName: "Java",
        lanFileName: "java"
    },
]

myCoding.forEach( (item) => {
    console.log(item);
    console.log(item.lanFileName);
})