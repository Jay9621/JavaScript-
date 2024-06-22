//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "jay"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "jk@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jay",
            lastname: "khandagale"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.fullname?.firstname); // use ? if you not sure about whether this particular data is available or not

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// //const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2); //to merged the object

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "test@gamil.com"
    },
    {
        id: 2,
        email: "demo@test.com"
    }
]

// console.log(users[1].email) // demo@test.com
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '1234', 'jay', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '1234' ], [ 'name', 'jay' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check the specific property is there or not

