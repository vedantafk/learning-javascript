function User(name, age) {
    this.name = name
    this.age = age
}

let user = new User("Josh", 18) 

console.log(user.name)
console.log(user.age)
console.log(user?.food)

let student = { name: "Lilly" };
// Instead of doing user.id = "ID";,
// the libraries can do the following
let id_libA = Symbol("id");
student[id_libA] = "ID assigned by library A";
let id_libB = Symbol("id");
student[id_libB] = "ID assigned by library B";
console.log(student[id_libA]);

