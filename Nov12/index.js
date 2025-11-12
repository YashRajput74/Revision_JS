console.log("<--Question 1 -->");

async function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("Data Loaded"), 100));
}

async function test() {
    console.log("Start");

    fetchData().then(res => console.log(res));
    console.log(await fetchData());

    setTimeout(() => console.log("Timeout"), 0);
    Promise.resolve().then(() => console.log("Promise"));

    console.log("End");
}

test();

console.log("<--Question 2 -->");

/* let value = 10;

function mystery(a = value, b = () => a, c = b()) {
    let value = 20;
    console.log(a, b(), c);
}

mystery();
mystery(5); */

console.log("<--Question 3 -->");

let arr = [10, 20, 30];
let obj = { a: 1, b: 2 };

function mystery([x, ...y], { a: A, b = A + 1 }) {
    console.log(x, y, A, b);
}

mystery(arr, { a: 5 });
mystery([...[..."123"].map(Number)], { a: 3, b: 7 });

console.log("<--Question 4 -->");

// Write a recursive function that flattens nested arrays up to a given depth.
let counter = 0;
function deepFlatten(arr, depth = 1) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            if (depth > 0) {
                newArr.push(...deepFlatten(arr[i], depth - 1));
            }
            else {
                newArr.push(arr[i]);
            }
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(deepFlatten([1, [2, [3, [4]]]], 1));
// Ans: [1, 2, [3, [4]]]

console.log("<--Question 5 -->");

// Write a function that returns the first non-repeating character in a string. If all characters repeat, return null.
function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        let flag = 0;
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                flag = 1;
            }
        }
        if (flag == 0) {
            return str[i];
        }
    }
    return null;
}
console.log(firstNonRepeatingChar("leetcode")); // Output: "l"
console.log(firstNonRepeatingChar("aabbcc"));   // Output: null
console.log(firstNonRepeatingChar("swiss"));    // Output: "w"
