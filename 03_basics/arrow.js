
const chai = () => {
    let userName  = "Rafi"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1 , num2) => num1+num2
const addTwo = (num1 , num2) => ({userName: "Rafi"})

console.log(addTwo(1,3))