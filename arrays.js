let arr = [-1, 2, 3, -9]

function maxSubarrSum(arr) {
    let sum = 0
    let maxsum = 0

    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        maxsum = Math.max(maxsum,sum)
        if(sum < 0) sum = 0
    }
    return maxsum;
}

// console.log(maxSubarrSum(arr))

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr2 = [ pete, john, mary ];
    
function sortByAge(arr) { 
    arr.sort((a, b) => a.age - b.age)
}

sortByAge(arr2)

console.log(arr2)