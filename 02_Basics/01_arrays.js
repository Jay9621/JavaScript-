//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["iron man", "lokey"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

//Array Methods

// myArr.push(6)//add the element
// myArr.pop()//last value of array remove

// myArr.unshift(9)// add the element is start of the array
// myArr.shift()// remove the first element

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(9));// if the specific value is not there so it shows -1 index

// const newArr = myArr.join() // join the two array but type of array change to string
// console.log(newArr);
// console.log(typeof(newArr)); // string
// console.log(myArr);

//slice and splice

// const newArr = [1, 2, 3, 4, 5, 6, 7]
// newArr.splice(0, 3) //manipulate original array
// //newArr.slice(2) 
// console.log(newArr);  

// console.log("A", myArr); //A [ 0, 1, 2, 3, 4, 5 ]

// const myn1 = myArr.slice(1, 3)
// console.log(myn1); // [ 1, 2 ] the value remain till 2 nd index but it will not change or manipulate the actual array

// const myn2 = myArr.splice(1, 3) // it also remove the other index till 3rd index but main diff is that it manipualate or change the actual array so main array become [ 0, 4, 5 ]
// console.log(myn2); // [ 1, 2, 3 ]
// console.log("B", myArr); //[ 0, 4, 5 ]

// console.log(myArr.concat(1)); // add element in last 
// console.log(myArr);

