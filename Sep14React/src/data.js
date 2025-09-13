/* export const products = [
    {
        name: "choclate",
        price: "50",
        company: "Amul",
        category: "Snacks"
    },
    {
        name: "Ice Cream",
        price: "70",
        company: "Magnum",
        category: "Snacks"
    },
    {
        name: "Laptop",
        price: "1000000",
        company: "Apple",
        category: "Electronics"
    },
    {
        name: "Mobile",
        price: "100000",
        company: "Samsung",
        category: "Electronics"
    },
    {
        name: "Hat",
        price: "5000",
        company: "H&M",
        category: "Wearables"
    },
    {
        name: "Shoes",
        price: "10000",
        company: "Jordans",
        category: "Wearables"
    },
    {
        name: "Spinach",
        price: "50",
        category: "groceries"
    },
    {
        name: "Apple",
        price: "70",
        category: "groceries"
    },
    {
        name: "Pen",
        price: "10",
        company: "Reynolds",
        category: "stationary"

    },
    {
        name: "Notebook",
        price: "100",
        company: "Classmate",
        category: "stationary"
    },

] */

export const products = {
    1: {
        name: "choclate",
        price: "50",
        company: "Amul",
    },
    2: {
        name: "Ice Cream",
        price: "70",
        company: "Magnum",
    },
    3: {
        name: "Laptop",
        price: "1000000",
        company: "Apple",
    },
    4: {
        name: "Mobile",
        price: "100000",
        company: "Samsung",
    },
    5: {
        name: "Hat",
        price: "5000",
        company: "H&M",
    },
    6: {
        name: "Shoes",
        price: "10000",
        company: "Jordans",
    },
    7: {
        name: "Spinach",
        price: "50",
    },
    8: {
        name: "Apple",
        price: "70",
    },
    9: {
        name: "Pen",
        price: "10",
        company: "Reynolds",

    },
    10: {
        name: "Notebook",
        price: "100",
        company: "Classmate",
    },
}

const categoriesWithoutAll = {
    "Snacks": [1, 2],
    "Electronics": [3, 4],
    "Wearables": [5, 6],
    "Groceries": [7, 8],
    "Stationary": [9, 10]
}

export const categories = {
    "All": [...Object.keys(products)],
    ...categoriesWithoutAll,
}