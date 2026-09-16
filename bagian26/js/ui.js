export function renderStatus(status) {

    const statusElement =
        document.querySelector("#status");

    if (status === "loading") {
        statusElement.textContent =
            "Loading data...";
    }

    else if (status === "error") {
        statusElement.textContent =
            "Gagal mengambil data.";
    }

    else if (status === "empty") {
        statusElement.textContent =
            "Produk tidak ditemukan.";
    }

    else if (status === "success") {
        statusElement.textContent =
            "";
    }
}

export function renderProducts(products) {

    const container =
        document.querySelector("#product-list");

    container.innerHTML = "";

    if (products.length === 0) {
        return;
    }

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
            >

            <div class="product-info">

                <h3>${product.title}</h3>

                <p class="category">
                    ${product.category}
                </p>

                <p>
                    Harga:
                    <strong>$${product.price}</strong>
                </p>

                <p>
                    Rating:
                    ⭐ ${product.rating}
                </p>

                <p>
                    Stock:
                    ${product.stock}
                </p>

            </div>
        `;

        container.appendChild(card);
    });
}

export function renderStatistics(statistics) {

    document.querySelector("#total-products")
        .textContent = statistics.totalProducts;

    document.querySelector("#average-price")
        .textContent =
        `$${statistics.averagePrice.toFixed(2)}`;

    document.querySelector("#total-stock")
        .textContent = statistics.totalStock;

    document.querySelector("#average-rating")
        .textContent =
        statistics.averageRating.toFixed(2);
}

export function renderCategories(categories) {

    const select =
        document.querySelector("#category-select");

    select.innerHTML =
        `<option value="all">Semua Kategori</option>`;

    categories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;
        option.textContent = category;

        select.appendChild(option);
    });
}