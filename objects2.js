// let user = {
//     name: "John",
//     age: "18",
//     admin: {
//         name: "Alex"
//     }
// }
// console.log(user.admin.name)

// let Food = {favFood : "Pizza"}

// Object.assign(user, Food)

// console.log(user.Food)
let addUser = function () {
    this.name = "Jhon"
}

let user = {}

user.f = addUser
user.f()

for(let i in user) {
    console.log(user[i])
}
