const products = [
    {
        id: 1,
        title: "Laptop",
        tags: [
            "computer",
            "electronics",
            "office"
        ],
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
        tags: [
            "mobile",
            "electronics"
        ],
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
            }
        ]
    },
    {
        id: 3,
        title: "Gaming Laptop",
        tags: [
            "gaming",
            "computer"
        ],
        reviews: [
            {
                user: "E",
                rating: 5,
                comment: "Great performance"
            }
        ]
    }
];

const allTags =
    products.flatMap(
        product => product.tags
    );

console.log("Semua Tags:");
console.log(allTags);

const allComments =
    products.flatMap(
        product =>
            product.reviews.map(
                review => review.comment
            )
    );

console.log("Semua Comments:");
console.log(allComments);