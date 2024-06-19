// const score = 400

// const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString()); // 100 but type is convert to string

// console.log(balance.toString().length);
// console.log(balance.toFixed(3)); // 100.00 if we use 2 instead of 3 it give 100.00

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); // give precision of upto 3 place output 124 or 23.89 become 23.9

// const one = 1000000
// console.log(one.toLocaleString('en-IN')); //en-IN convert it in indian std 10,00,000


//*******************Maths*********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.sqrt(4)); // square root
// console.log(Math.pow(4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));//make round off of upper level
// console.log(Math.floor(4.9));// make round off of lower level
// console.log(Math.min(4,3,8,7));
// console.log(Math.max(4,3,8,7));



console.log(Math.random());// values comes from 0 from 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10 + 1));

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

