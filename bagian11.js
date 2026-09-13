const products = [
    {
        id: 1,
        title: "Laptop",
        category: "electronics",
        brand: "BrandA",
        tags: [
            "computer",
            "office"
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        category: "electronics",
        brand: "BrandB",
        tags: [
            "mobile",
            "electronics"
        ]
    },
    {
        id: 3,
        title: "Gaming Laptop",
        category: "electronics",
        brand: "BrandA",
        tags: [
            "gaming",
            "computer"
        ]
    },
    {
        id: 4,
        title: "Keyboard",
        category: "accessories",
        brand: "BrandC",
        tags: [
            "computer",
            "office"
        ]
    }
];

const uniqueCategories = [
    ...new Set(
        products.map(
            product =>
                product.category
        )
    )
];

console.log(
    "Unique Categories:"
);

console.log(uniqueCategories);

const uniqueBrands = [
    ...new Set(
        products.map(
            product =>
                product.brand
        )
    )
];

console.log(
    "Unique Brands:"
);

console.log(uniqueBrands);

const allTags =
    products.flatMap(
        product =>
            product.tags
    );

const uniqueTags = [
    ...new Set(allTags)
];

console.log(
    "Unique Tags:"
);

console.log(uniqueTags);