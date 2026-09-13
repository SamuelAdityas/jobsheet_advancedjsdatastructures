const products = [
    {
        id: 1,
        title: "Laptop",
        thumbnail:
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        category: "laptops",
        price: 1200,
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        thumbnail:
            "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        category: "smartphones",
        price: 800,
        rating: 4.2
    },
    {
        id: 3,
        title: "Headphones",
        thumbnail:
            "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        category: "audio",
        price: 100,
        rating: 4.0
    },
    {
        id: 4,
        title: "Keyboard",
        thumbnail:
            "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        category: "accessories",
        price: 75,
        rating: 4.1
    },
    {
        id: 5,
        title: "Gaming Laptop",
        thumbnail:
            "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
        category: "laptops",
        price: 1500,
        rating: 4.8
    }
];

function renderProducts(products) {

    const container =
        document.querySelector(
            "#product-list"
        );

    container.innerHTML = "";

    for (const product of products) {

        const card =
            document.createElement(
                "div"
            );

        card.classList.add(
            "product-card"
        );

        card.innerHTML = `

            <img
                src="${product.thumbnail}"
                alt="${product.title}"
            >

            <h3>
                ${product.title}
            </h3>

            <p>
                ${product.category}
            </p>

            <p>
                Harga: $${product.price}
            </p>

            <p>
                Rating: ${product.rating}
            </p>

        `;

        container.append(card);
    }
}

renderProducts(products);