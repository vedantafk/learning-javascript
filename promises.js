// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User data received");
//         }, 2000);
//     });
// }

// console.log("Request started");

// fetchData().then((data) => {
//     console.log(data);
// });

// console.log("Doing other work");

function login(username, password) {
    return new Promise((resolve,reject) => {
        if(username === "admin" && password === "1234") {
            resolve("Login Successful")
        }
        else {
            reject("Invalid Creds")
        }
    })

}

login("admin", "wrong")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

