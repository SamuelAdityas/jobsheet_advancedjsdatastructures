const products = [

    {
        id: 1,
        title: "Laptop",
        category: "laptops",
        price: 1200
    },

    {
        id: 2,
        title: "Gaming Laptop",
        category: "laptops",
        price: 1500
    },

    {
        id: 3,
        title: "Smartphone",
        category: "smartphones",
        price: 800
    }
];

const state = {

    products: products,

    search: "",

    category: "all",

    sortBy: "default",

    favorites: [],

    status: "success"
};

function render() {

    let result =
        state.products;

    if (state.search !== "") {

        result =
            result.filter(
                product =>
                    product.title
                        .toLowerCase()
                        .includes(
                            state.search
                                .toLowerCase()
                        )
            );
    }

    if (
        state.category !== "all"
    ) {

        result =
            result.filter(
                product =>
                    product.category ===
                    state.category
            );
    }

    const container =
        document.querySelector(
            "#product-list"
        );

    container.innerHTML = "";

    if (result.length === 0) {

        container.innerHTML =
            "<p>Produk tidak ditemukan.</p>";

        return;
    }

    for (const product of result) {

        const card =
            document.createElement(
                "div"
            );

        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: $${product.price}</p>
            <hr>
        `;

        container.append(card);
    }
}

render();