// Dates

// let myDate = new Date()
// console.log(myDate);//2024-06-19T17:02:43.579Z
// console.log(myDate.toString());//Wed Jun 19 2024 17:03:57 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Wed Jun 19 2024
// console.log(myDate.toISOString());//Wed Jun 19 2024
// console.log(myDate.toJSON());//2024-06-19T17:07:31.449Z
// console.log(myDate.toLocaleDateString());//6/19/2024
// console.log(myDate.toLocaleString());//6/19/2024, 5:07:31 PM

// console.log(typeof myDate) // Object

//let myCreatedDate = new Date(2023, 0, 23) // months start from 0 
//let myCreatedDate = new Date(2001, 5, 9, 7, 45) // year, month, date , hr, min. sec
let myCreatedDate = new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1718817415489 convert it in milisec
// console.log(myCreatedDate.getTime()); // for converting it into milisec => 1673654400000

console.log(Date.now()); //1718817614533
console.log(Math.floor(Date.now()/1000)); //1718817678

let newDate = new Date()
console.log(newDate.getDate()); //19
console.log(newDate.getFullYear());//2024

console.log(`${newDate.getFullYear()} is the year`); // backtick => press button below the esc 

newDate.toLocaleString('default',{
    weekday: "long",
})

