const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

/////or////

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    }, 1000)

}).then(function(){
    console.log("Async 2 task resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({name: "Jay", Email: "jk.com"}) //we can pass object, array and functions 
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "jay", password: "123"}) 
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then(() => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolve or reject")
)

const promiseFive = new Promise(function(resolve, reject){
    setInterval(function(){
        let error = true
        if(!error){
            resolve({username: "jk", password: "1234"})
        }else{
            reject('ERROR: jk went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // json me convert hone ko time lagta hai to ise bhi await karavna padega
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }
// getAllUsers()

// using then - catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);  
}) 
.catch((error) => console.log(error)
)