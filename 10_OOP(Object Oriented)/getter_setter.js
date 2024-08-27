class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    //suppose muze kisi chij ka access nahi dena to get set use krte hai

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        return this._email = value
    }

    get password(){
        return `${this._password}Jay`
    }

    set password(value){
        this._password = value
    }
}

const jay = new User("jk.com", "abcd")
console.log(jay.password);
console.log(jay.email);



