//(IIFE) Immediately Invoked Function Expressions:

(function chai(){
    console.log(`DataBase connected`);
})();

((name) => {
    console.log(`DataBase connected to ${name}`);
})("Rafi");