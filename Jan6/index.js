/* 
Convert the array into the shown output.
const users = [
    { id: 1, name: "A", isActive: true },
    { id: 2, name: "B", isActive: false },
    { id: 3, name: "C", isActive: true }
];
Expected output:
{
    active: ["A", "C"],
    inactive: ["B"]
}
*/
const users = [
    { id: 1, name: "A", isActive: true },
    { id: 2, name: "B", isActive: false },
    { id: 3, name: "C", isActive: true }
];

function sortActive(givenArray) {
    let newArray = {
        active: [],
        inactive: []
    }
    givenArray.forEach(user => {
        if (user.isActive) {
            newArray.active.push(user.name);
        }
        else {
            newArray.inactive.push(user.name);
        }

    });
    return newArray;
}

console.log(sortActive(users));

/* 
Implement a simple debounce function:
function debounce(fn, delay) {
  // your code
}
const debouncedSearch = debounce(searchApiCall, 300);
*/

/* 
Transform this into the expected output.
const orders = [
    { id: 1, items: ["apple", "banana"] },
    { id: 2, items: ["banana", "orange"] },
    { id: 3, items: ["apple"] }
];
Expected output:
{
    apple: [1, 3],
    banana: [1, 2],
    orange: [2]
}
*/

const orders = [
    { id: 1, items: ["apple", "banana"] },
    { id: 2, items: ["banana", "orange"] },
    { id: 3, items: ["apple"] }
];

function sortFruits(givenOrders) {
    let newObject = {

    }
    givenOrders.forEach(order => {
        order.items.forEach(item => {
            if (!newObject[item]) {
                newObject[item] = [order.id]
            }
            else {
                newObject[item].push(order.id)
            }
        })
    })
    return newObject;
}

console.log(sortFruits(orders));

/* 
You have two arrays of objects, merge them by id:
const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const arr2 = [{ id: 1, age: 25 }, { id: 2, age: 30 }];
Expected output:
[
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
]
*/

const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const arr2 = [{ id: 1, age: 25 }, { id: 2, age: 30 }];

function mergeObjects(givenArray1, givenArray2) {
    const map = {};
    givenArray1.forEach(object => {
        map[object.id] = object;
    })
    const merged = givenArray2.map
    (obj2 => {
        const object1 = map[obj2.id];
        return {...object1,...obj2}
    })
    return merged;
}

console.log(mergeObjects(arr1,arr2))