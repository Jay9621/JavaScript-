// Immedeiately Invoked Function Expresiions (IIFE)

// there is a probel in global scope pollution for remove that pollution we use IIFE

// function chai(){
//     console.log(`DB Connected`);

// }
// chai()

// (function chai(){

//     console.log(`DB Connected`);

// })()

// (write a function)(for function excecution)
// example: 

// (function test(){
    

// })()

( function Jay () {
    // named IIFE
    console.log(`DB Connected Two`);
} )();

( () => {
    console.log(`DB Two`);
}) ();

( (name) =>{
    //unnamed IIFE
    console.log(`Welcome ${name}`);
} ) ("Jay");

