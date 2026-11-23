function displayStudent({name, branch, semester}) {
    console.log(name)
    console.log(branch)
}

displayStudent({
    name: "Vedant",
    branch: "CSE",
    semester: 1
});

const a = [10, 20, 30];
const b = [40, 50, 60];

const c = [5, ...a, ...b, 70]
console.log(c)

let student = {
    name: "vedant",
    age: 18,
    branch: "CSE",
    skills: ["Coding", "Gaming", "Cubing"],
    address: {
        city: "gandhinagar",
        state: "gujarat",
    }
}
// console.log(student.name)
// console.log(student.address.city)
student.skills.push("Football")
student.college = "Nirma"

// console.log(student)

const products = [
    { name: "Keyboard", price: 1200, stock: 5 },
    { name: "Mouse", price: 600, stock: 0 },
    { name: "Monitor", price: 8500, stock: 3 },
    { name: "Headphones", price: 2000, stock: 8 }
];

function stock(products) {
    let stocks = 0
    for(let product of products) {
        console.log(product.name)
        stocks += product.stock
    }
    for(let product of products){
        if(product.stock > 0) console.log(product.name)
    }
    console.log(stocks)
}

// stock(products)


const product = {
    name: "Laptop",
    price: 75000,
    brand: "Lenovo",
    category: "Electronics"
};

const {name, price} = product

console.log(price)