//singleton
// Object.create

// object literal

const mySym = Symbol("Key1")

const JsUser = {
    name: "Jay",
    [mySym]: "myKey1", // use [...] to call the symbol
    age: 23,
    location: "Pune",
    email: "jay@gamil.com",
    isLoggedIn: false,
    lastrLoginDays: ["Monday", "Sunday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]); // symol
console.log(typeof [mySym]);

JsUser.email = "Jay@tml.com" // to change the data you just override it
//Object.freeze(JsUser) // to freeze the data
JsUser.email = "JKK@gmail.com"

console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Jay");
}

JsUser.greeting2 = function(){
    console.log(`Hello Jay, ${this.email}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
