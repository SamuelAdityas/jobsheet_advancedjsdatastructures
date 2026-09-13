const products = [
    {
        id: 1,
        title: "Laptop",
        category: "electronics"
    },
    {
        id: 2,
        title: "Smartphone",
        category: "electronics"
    },
    {
        id: 3,
        title: "Headphones",
        category: "electronics"
    },
    {
        id: 4,
        title: "Keyboard",
        category: "accessories"
    },
    {
        id: 5,
        title: "Mouse",
        category: "accessories"
    },
    {
        id: 6,
        title: "Apple",
        category: "groceries"
    }
];

function groupByCategory(products) {

    return products.reduce(
        (groups, product) => {

            const key =
                product.category;

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(product);

            return groups;

        },
        {}
    );
}

const groupedProducts =
    groupByCategory(products);

console.log("Produk berdasarkan kategori:");

console.log(groupedProducts);

const summary =
    Object.entries(
        groupedProducts
    ).map(
        ([category, products]) => ({
            category: category,
            totalProducts:
                products.length
        })
    );

console.log(
    "Ringkasan jumlah produk:"
);

console.table(summary);