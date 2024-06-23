
// // if (true) {
// //     let a = 10
// //     const b = 20
// //     var c = 30

// // }

// // console.log(a); // not defined
// // console.log(b); // not defined
// // console.log(c); // 30 so avoid var

// let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     console.log("Inner: ", a);
// }




// console.log(a); // 300
// // output Inner:  10
// // 300

function one(){
    const username = "jay"

    function two(){
        const website = "YT"
        //console.log(username);
    }
    //console.log(website);

    two()
}
//one()

if(true){
    const username = "jay"
    if(username === "jay"){
        const website = " YT"
        //console.log(username + website);

    }
    //console.log(website);
}
//console.log(username);

// ++++++++++++++++++intresting+++++++++++++
addOne(5)
function addOne(num){
    return num + 1

}
// it works 

addTwo(5)
const addTwo = function(num){
    return num + 2
}

// but this not work