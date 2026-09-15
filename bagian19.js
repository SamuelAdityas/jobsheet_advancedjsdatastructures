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
    },
    {
        id: 4,
        title: "Basic Phone",
        category: "smartphones",
        price: 300
    }
];

const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default"
};

function render() {
    let result =
        [...state.products];

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

    if (
        state.sortBy ===
        "price-asc"
    ) {

        result.sort(
            (a, b) =>
                a.price - b.price
        );

    } else if (
        state.sortBy ===
        "price-desc"
    ) {

        result.sort(
            (a, b) =>
                b.price - a.price
        );

    } else if (
        state.sortBy ===
        "title"
    ) {

        result.sort(
            (a, b) =>
                a.title.localeCompare(
                    b.title
                )
        );
    }

    const container =
        document.querySelector(
            "#product-list"
        );

    container.innerHTML = "";

    for (const product of result) {
        const card =
            document.createElement(
                "div"
            );
        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>
                Kategori:
                ${product.category}
            </p>

            <p>
                Harga:
                $${product.price}
            </p>

            <hr>
        `;
        container.append(card);
    }
}

const searchInput =
    document.querySelector(
        "#search-input"
    );

searchInput.addEventListener(
    "input",
    (event) => {
        state.search =
            event.target.value;

        render();
    }
);

const categorySelect =
    document.querySelector(
        "#category-select"
    );

categorySelect.addEventListener(
    "change",
    (event) => {
        state.category =
            event.target.value;
        render();
    }
);

const sortSelect =
    document.querySelector(
        "#sort-select"
    );

sortSelect.addEventListener(
    "change",
    (event) => {
        state.sortBy =
            event.target.value;

        render();
    }
);

render();