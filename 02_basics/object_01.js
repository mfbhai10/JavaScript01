//Object literals:

const mySymbol = Symbol("key")
const jsUser = {
    name: "Rafi",
    "full name": "Mutasim Fuad Rafi",
    [mySymbol]: "Boss",
    age: 22,
    profession: "Student",
    location: "Dhaka",
    email: "rafi10@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday","Monday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

console.log(jsUser[mySymbol]);

jsUser.email = "mfbhai@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "rrr@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello World");
}

jsUser.greeting2 = function(){
    console.log(`Hi Boss ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2());