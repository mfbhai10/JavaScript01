const balance = 1000

if(balance > 500) console.log("test"),console.log("test2");

if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy");
}

if(loggedInFromGoogle || userLoggedIn){
    console.log("User logged in");
}