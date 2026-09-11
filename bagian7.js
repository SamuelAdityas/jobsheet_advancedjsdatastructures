// Data Produk

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800
    },

    {
        id: 3,
        title: "Headphones",
        price: 100
    },

    {
        id: 4,
        title: "Gaming Laptop",
        price: 1500
    },

    {
        id: 5,
        title: "Keyboard",
        price: 75
    }
];

// Latihan 7.1

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        const mid =
            Math.floor(
                (left + right) / 2
            );

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {

            left = mid + 1;

        }

        else {

            right = mid - 1;
        }
    }

    return -1;
}

const numbers = [
    10,
    20,
    30,
    40,
    50,
    60,
    70
];

const searchResult =
    binarySearch(numbers, 40);

console.log(
    "Hasil Binary Search:"
);

console.log(searchResult);

// Latihan 7.2

const sortedProducts =
    [...products].sort(
        (a, b) =>
            a.price - b.price
    );

console.log(
    "Produk setelah diurutkan berdasarkan price:"
);

console.log(sortedProducts);

function binarySearchByPrice(
    sortedProducts,
    targetPrice
) {

    let left = 0;

    let right =
        sortedProducts.length - 1;


    while (left <= right) {

        const mid =
            Math.floor(
                (left + right) / 2
            );

        if (
            sortedProducts[mid].price ===
            targetPrice
        ) {

            return sortedProducts[mid];
        }

        if (
            sortedProducts[mid].price <
            targetPrice
        ) {

            left = mid + 1;

        }

        else {

            right = mid - 1;
        }
    }

    return undefined;
}

const productResult =
    binarySearchByPrice(
        sortedProducts,
        800
    );

console.log(
    "Produk dengan harga 800:"
);

console.log(productResult);