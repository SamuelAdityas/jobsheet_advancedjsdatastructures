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
        title: "Keyboard",
        price: 75
    }
];

function buildProductLookup(products) {

    const productMap =
        new Map();

    for (const product of products) {

        productMap.set(
            product.id,
            product
        );
    }

    return productMap;
}

const productLookup =
    buildProductLookup(products);

console.log(
    "Product Map:"
);

console.log(productLookup);

const product =
    productLookup.get(2);

console.log(
    "Produk dengan ID 2:"
);

console.log(product);

const notFound =
    productLookup.get(99);

console.log(
    "Produk dengan ID 99:"
);

console.log(notFound);