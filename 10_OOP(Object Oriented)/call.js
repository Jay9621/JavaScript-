function setUsername(username){
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const newuser = new createUser("jay", "jk.com", "1234")
console.log(newuser);
