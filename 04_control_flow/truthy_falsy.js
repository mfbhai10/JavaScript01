const userEmail = []

if(userEmail){
    console.log("Got email");
}
else{
    console.log("Don't have an email");
}

//falsy Values:
// 0,false,-0,BigInt 0n, "", null, undefined, NaN

//truthy Valuse:
// "0", [], " ", 'false', {}, function(){}

if(userEmail.length == 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty")
}

//Nullish Coalescing Operator(??):

let val;

val = null ?? 10 ?? 20

console.log(val)

//ternary:
// condition ? if:else 