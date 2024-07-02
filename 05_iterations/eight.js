const myNums = [1, 2, 3]

 const myTotal = myNums.reduce(function (acc, currval) {
     console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval
 }, 0)
 console.log(myTotal);

 const myTotal1 = myNums.reduce(function (acc, currval) {
     console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval
 }, 3)
 console.log(myTotal1);

 const myTotal2 = myNums.reduce( (acc1, currval1) => {
    return acc1 + currval1
 },0)

 console.log(myTotal2);

 const myTotal3 = myNums.reduce( (acc1, currval1) => acc1 + currval1,0)

 console.log(myTotal3);


 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const shoppingPrice = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(shoppingPrice);