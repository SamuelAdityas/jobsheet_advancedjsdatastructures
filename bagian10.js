function countFrequency(array) {

    return array.reduce(
        (counts, item) => {

            counts[item] =
                (counts[item] || 0) + 1;

            return counts;

        },
        {}
    );
}

const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];

console.log(
    "Frequency words:"
);

console.log(
    countFrequency(words)
);

const products = [
    {
        id: 1,
        title: "Laptop",
        category: "electronics",
        brand: "BrandA",
        rating: 4.5,
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
        rating: 4.2,
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
        rating: 4.8,
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
        rating: 4.1,
        tags: [
            "computer",
            "office"
        ]
    }
];

const categoryFrequency =
    countFrequency(
        products.map(
            product =>
                product.category
        )
    );

console.log(
    "Frequency Category:"
);

console.log(categoryFrequency);

const allTags =
    products.flatMap(
        product =>
            product.tags
    );

const tagFrequency =
    countFrequency(allTags);

console.log(
    "Frequency Tags:"
);

console.log(tagFrequency);

const roundedRatings =
    products.map(
        product =>
            Math.round(product.rating)
    );

const ratingFrequency =
    countFrequency(
        roundedRatings
    );

console.log(
    "Frequency Rating:"
);

console.log(ratingFrequency);

const brands =
    products.map(
        product =>
            product.brand
    );

const brandFrequency =
    countFrequency(brands);

console.log(
    "Frequency Brand:"
);

console.log(brandFrequency);