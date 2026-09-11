// Data produk
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops"
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones"
    },

    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio"
    },

    {
        id: 4,
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops"
    },

    {
        id: 5,
        title: "Keyboard",
        price: 75,
        category: "accessories"
    }
];

// Latihan 6.1

function linearSearch(array, target) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

const numbers = [
    10,
    20,
    30,
    40,
    50
];

console.log("Hasil Linear Search:");

console.log(
    linearSearch(numbers, 30)
);

// Latihan 6.2

function findProductById(products, id) {

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === id) {

            return products[i];
        }
    }

    return undefined;
}

const result =
    findProductById(products, 3);



console.log(
    "Hasil pencarian produk dengan ID 3:"
);

console.log(result);