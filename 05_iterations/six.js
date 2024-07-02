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

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);