class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptpassword(){
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("jay", "jk.com", "1234")
console.log(newUser);
console.log(newUser.encryptpassword());
console.log(newUser.changeusername());

// behind the scene (bina class constructor use krke)

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptpassword = function(){
    return `${this.password}abc`
}

const newUser1 = new User("jay", "jk.com", "1234")
console.log(newUser1);
console.log(newUser1.encryptpassword());
