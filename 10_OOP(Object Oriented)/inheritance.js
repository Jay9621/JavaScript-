class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
        
    }

    addCourse(){
        console.log(`A course is created by ${this.username}`);
        
    }
}

const UserA = new Teacher("Jay", "jk.com", "1234")

UserA.addCourse();

