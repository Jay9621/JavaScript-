class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
        
    }

    static createID(){ // static outside access nahi deta so output me error ayega
        return `123`
    }
}

const jay = new User("jk")
console.log(jay.createID());
//agar access nahi dena hai to static lagao