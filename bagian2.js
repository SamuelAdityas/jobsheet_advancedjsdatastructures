const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        stock: 5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        stock: 15
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        stock: 3
    }
];

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

console.log(findProductById(products, 2));

const lowStock = products.filter(
    product => product.stock < 10
);

console.log(lowStock);

function updateStock(products, id, newStock) {
    return products.map(product =>
        product.id === id
            ? {
                ...product,
                stock: newStock
            }
            : product
    );
}

const updatedProducts =
    updateStock(products, 2, 30);

console.log(updatedProducts);