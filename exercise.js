
function validateUser(obj) {
    if (obj.username.length < 3) console.log("Username must be atleast 3 characters")
    if (obj.password.length < 8) console.log("Password must be atleast 8 characters")
    if (obj.age < 18) console.log("Age must be atleast 18 or more")
    if (obj.email.includes("@") != true) {
        console.log("Not a valid email")
        return 0;
    }
    let domain = obj.email.split("@")[1];
    let validDomain =
    domain &&
    domain.includes(".") &&
    !domain.startsWith(".") &&
    !domain.endsWith(".");

    if(validDomain != 1) console.log("Not a valid email")
    
}

let user = {
    username: "Vedant",
    age: 17,
    password: "Abc",
    email: "vedant.gmail.com",
}

validateUser(user)


const students = [
    { name: "Alex", marks: 85, age: 19 },
    { name: "Sam", marks: 42, age: 18 },
    { name: "John", marks: 92, age: 20 },
    { name: "Mike", marks: 65, age: 19 },
    { name: "David", marks: 35, age: 17 }
];

let names = students.map(student => student.name)
let pass = students.filter(student => student.marks >= 60)
let john = students.find(student => student.name === "John")

// console.log(names)
// console.log(pass)
// console.log(john)