function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("F");
    console.log("I");
}
// sayMyName()

function addTwoNum(num1, num2){
    return num1 + num2
}
const total = addTwoNum(1,2)
// console.log(total)
// console.log(addTwoNum(1,2))

function logInUserMessage(userName = "abc"){
    if(!userName){
        console.log("Please enter an userName first")
        return
    }
    return `${userName} just logged in here`
}

// console.log(logInUserMessage("Rafi"));

function calculateCartPrice(val1, ...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300));

const user = {
    userName: "Rafi",
    price: 299
}

function handleObj(anyObj){
    console.log(`username is ${anyObj.userName} and price is ${anyObj.price}`);
}

// handleObj(user)

const myNewArr = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));

console.log(returnSecondValue([100,200,300,400,500]));


