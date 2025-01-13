console.log("Object Singleton: \n\n");

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "12345a"
tinderUser.name = "Rafi Miya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "maafkoiradenbhai@gmail.com",
    fullName: {
        userName:{
            firstName: "Rafi",
            lastName: "Bhai"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({},obj1,obj2)
// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 123,
        email: "r1@gamil.com"
    },
    {
        id: 123,
        email: "r2@gamil.com"
    },
    {
        id: 123,
        email: "r3@gamil.com"
    },
]

// console.log(users[1].email);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedOut'));


const course = {
    courseName: "JS in hindi",
    price: "Free",
    courseInstructor: "Hitesh"
}

console.log(course["courseInstructor"]);
// console.log(course.courseInstructor);

const {courseInstructor: Instructor} = course

console.log(Instructor);