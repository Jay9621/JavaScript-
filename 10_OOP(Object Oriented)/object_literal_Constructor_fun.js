//// Object literal

const user = {
    Username: "jay",
    loginCount: 8,
    signIn: true,

    getUserDetails: function(){
        //console.log("got user details from database"); // O/P: jay got user details from database
        //console.log(`username: ${Username}`); // O/P: error
        console.log(`username: ${this.Username}`); // jay username: jay
        console.log(this); // value of this within the function is {
        //     Username: 'jay',
        //     loginCount: 8,
        //     signIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
        
    }
}

console.log(user.Username); // jay
console.log(user.getUserDetails()); // got user details from database

console.log(this); // {} empty object


//// constructor function

// ek hi Object literal se multiple instances bana sakte hai

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // also we can add

    this.greeting = function(){
        console.log(`welcome ${this.username}`); // greeting: [Function (anonymous)]
        
    }

    return this // return use nahi kiya fir bhi chalega
}

const userOne = new User("jay", 11, true); // yaha new nahi use kiya to without userTwo print kiye uski value overright ho jayegi

// new use kiye to first emplty object create hota hai 1. create new empty object 2. constructor function call hota hai 3. inject all the arguments 4. final output mil jata hai

const userTwo = new User("JK", 12, false);

console.log(userOne);
console.log(userTwo);



 

