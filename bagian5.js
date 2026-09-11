const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones"
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        rating: 4.0,
        stock: 5,
        category: "audio"
    },
    {
        id: 4,
        title: "Gaming Laptop",
        price: 1500,
        rating: 4.8,
        stock: 7,
        category: "laptops"
    },
    {
        id: 5,
        title: "Keyboard",
        price: 75,
        rating: 4.1,
        stock: 20,
        category: "accessories"
    }
];

// Latihan 5.1

const laptopPrices =
    products
        .filter(
            product =>
                product.category === "laptops"
        )
        .map(
            product =>
                product.price
        );

const average =
    laptopPrices.reduce(
        (sum, price) =>
            sum + price,
        0
    ) / laptopPrices.length;

console.log(
    "Harga laptop:"
);

console.log(laptopPrices);

console.log(
    "Rata-rata harga laptop:"
);

console.log(average);

// Latihan 5.2

function getStatistics(products) {
    const prices =
        products.map(
            product =>
                product.price
        );

    const ratings =
        products.map(
            product =>
                product.rating
        );

    const totalProducts =
        products.length;

    const averagePrice =
        prices.reduce(
            (sum, price) =>
                sum + price,
            0
        ) / prices.length;

    const highestPrice =
        Math.max(...prices);

    const lowestPrice =
        Math.min(...prices);

    const totalStock =
        products.reduce(
            (sum, product) =>
                sum + product.stock,
            0
        );

    const averageRating =
        ratings.reduce(
            (sum, rating) =>
                sum + rating,
            0
        ) / ratings.length;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

const statistics =
    getStatistics(products);

console.log(
    "Statistics:"
);

console.log(statistics);