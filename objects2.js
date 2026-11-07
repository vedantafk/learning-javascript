let user = {
    name: "John",
    age: "18",
    admin: {
        name: "Alex"
    }
}
console.log(user.admin.name)

let Food = {favFood : "Pizza"}

Object.assign(user, Food)

console.log(user.Food)