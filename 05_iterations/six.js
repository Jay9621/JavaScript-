// const coding = ["js", "Python", "Java", "cpp"]

// const values = coding.forEach( (item) => {

//     console.log(item);

// })

// console.log(values); // undefined , for each can  not return any value

//********filter************


// const myNums = [1, 2, 3, 4, 5, 6, 7]

// const newNums = myNums.filter( (num) => num > 5)
// console.log(newNums); // o/p: [6, 7]

// const newMuns = myNums.filter( (num) => {
//     num > 5
// })
// console.log(newMuns); // [] empty array

// const newMuns2 = myNums.filter( (num) => {
//     return num > 5
// })
// console.log(newMuns2); // here we use { } so we must use return , O/P: [6, 7]

// const newNumber = [1, 2, 3, 4, 5, 6]

// newNumber.forEach( (num) => {
//     if( num > 5){
//         newNumber.push(num);

//     }
   
    
// })

//************************* */

const myCoding = [
    {
        lanName: "Javascript",
        lanFileName: "Js",
        level: "Easy"
    },
    {
        lanName: "Python",
        lanFileName: "py",
        level: "Very Easy"
    },
    {
        lanName: "Java",
        lanFileName: "java",
        level: "Hard"
    },
    {
        lanName: "C++",
        lanFileName: "cpp",
        level: "moderate"
    },
    {
        lanName: "C",
        lanFileName: "c",
        level: "moderate"
    },
    {
        lanName: "HTML",
        lanFileName: "html",
        level: "Very Easy"
    },
    {
        lanName: "CSS",
        lanFileName: "css",
        level: "Very Easy"
    },
    {
        lanName: "C#",
        lanFileName: ".Net",
        level: "Hard"
    },
]

const userWebpage = myCoding.filter( (Code) => Code.level === "Hard")

console.log(userWebpage);

const UserVeryEasy = myCoding.filter( (VeryEasyLevelL) => VeryEasyLevelL.level === "Very Easy")

console.log(UserVeryEasy);