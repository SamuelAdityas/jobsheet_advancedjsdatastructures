const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        rating: 4.0
    },
    {
        id: 4,
        title: "Gaming Laptop",
        price: 1500,
        rating: 4.8
    },
    {
        id: 5,
        title: "Keyboard",
        price: 75,
        rating: 4.1
    }
];

function bubbleSort(numbers) {

    const arr = [...numbers];

    for (
        let i = 0;
        i < arr.length - 1;
        i++
    ) {
        for (
            let j = 0;
            j < arr.length - 1 - i;
            j++
        ) {

            if (arr[j] > arr[j + 1]) {

                [
                    arr[j],
                    arr[j + 1]
                ] = [
                    arr[j + 1],
                    arr[j]
                ];
            }
        }
    }
    return arr;
}

const numbers = [
    5,
    3,
    8,
    1,
    4
];

const sortedNumbers =
    bubbleSort(numbers);

console.log("Array asli:");
console.log(numbers);

console.log("Hasil Bubble Sort:");
console.log(sortedNumbers);

function sortProducts(products, sortBy) {

    const result = [...products];

    switch (sortBy) {

        case "price-asc":

            return result.sort(
                (a, b) =>
                    a.price - b.price
            );

        case "price-desc":

            return result.sort(
                (a, b) =>
                    b.price - a.price
            );

        case "rating":

            return result.sort(
                (a, b) =>
                    b.rating - a.rating
            );

        case "title":

            return result.sort(
                (a, b) =>
                    a.title.localeCompare(b.title)
            );

        default:

            return result;
    }
}

console.log("Price Ascending:");

console.log(
    sortProducts(
        products,
        "price-asc"
    )
);

console.log("Price Descending:");

console.log(
    sortProducts(
        products,
        "price-desc"
    )
);

console.log("Rating:");

console.log(
    sortProducts(
        products,
        "rating"
    )
);

console.log("Title:");

console.log(
    sortProducts(
        products,
        "title"
    )
);