const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",

        tags: [
            "computer",
            "electronics",
            "office"
        ],

        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },

        reviews: [
            {
                user: "A",
                rating: 5,
                comment: "Good product"
            },
            {
                user: "B",
                rating: 4,
                comment: "Worth it"
            }
        ]
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",

        tags: [
            "mobile",
            "electronics"
        ],

        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },

        reviews: [
            {
                user: "C",
                rating: 4,
                comment: "Nice camera"
            },
            {
                user: "D",
                rating: 5,
                comment: "Fast"
            },
            {
                user: "E",
                rating: 3,
                comment: "Battery so-so"
            }
        ]
    }
];

const allTags = products.map(
    product => product.tags
);

console.log(allTags);

function findProductsByTag(products, tag) {
    return products.filter(
        product => product.tags.includes(tag)
    );
}

console.log(
    findProductsByTag(products, "electronics")
);

function getReviewCounts(products) {

    return products.map(product => ({
        id: product.id,
        title: product.title,
        totalReviews: product.reviews.length
    }));
}

function getFiveStarReviews(products) {

    return products.flatMap(product =>
        product.reviews
            .filter(review => review.rating === 5)
    );

}

console.log(
    getFiveStarReviews(products)
);

function getAverageReviewRating(product) {

    const total =
        product.reviews.reduce(
            (sum, review) =>
                sum + review.rating,
            0
        );

    return total / product.reviews.length;
}

console.log(
    getAverageReviewRating(products[0])
);

function productWithMostReviews(products) {

    return products.reduce(
        (highest, product) => {

            if (
                !highest ||
                product.reviews.length >
                highest.reviews.length
            ) {
                return product;
            }

            return highest;
        },
        null
    );
}

console.log(
    productWithMostReviews(products)
);

function getAllReviewRatings(products) {

    return products.flatMap(product =>
        product.reviews.map(
            review => review.rating
        )
    );

}

console.log(
    getAllReviewRatings(products)
);