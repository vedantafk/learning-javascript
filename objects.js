// let user = {
//     name: "vedant",
//     age: "18",
//     favFood : "Pizza",
// }
// console.log("blahblah" in user)

// user.name = "Rahul"
// delete user.favFood

// for(let info in user) {
//     console.log(user[info])
// }

// let schedule = {}

// function isEmpty(obj) {
// for(let key in obj) {
//     return false;
// }
// return true;
// }

// console.log(isEmpty(schedule))
// schedule["Monday"] = "Leave"
// console.log(isEmpty(schedule))

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu)

for(let info in menu) {
    console.log(menu[info])
}

