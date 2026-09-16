const statusElement = document.querySelector("#status");
const productList = document.querySelector("#product-list");

async function fetchProducts() {

    try {

        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data.products;

    } catch (error) {

        console.error("Gagal mengambil data:", error);

        throw error;

    }

}

function renderProducts(products) {

    productList.innerHTML = "";

    for (const product of products) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img 
                src="${product.thumbnail}" 
                alt="${product.title}"
            >

            <h3>${product.title}</h3>

            <p>
                Kategori: ${product.category}
            </p>

            <p class="price">
                Harga: $${product.price}
            </p>

            <p>
                Rating: ${product.rating}
            </p>

            <p>
                Stock: ${product.stock}
            </p>
        `;

        productList.append(card);
    }

}

async function loadProducts() {

    statusElement.textContent =
        "Loading... Mengambil data produk.";

    productList.innerHTML = "";

    try {

        const products = await fetchProducts();

        if (products.length === 0) {

            statusElement.textContent =
                "Tidak ada produk.";

            return;
        }

        statusElement.textContent =
            `Berhasil mengambil ${products.length} produk.`;

        renderProducts(products);

    } catch (error) {

        statusElement.textContent =
            "Gagal mengambil data produk.";

        productList.innerHTML = `
            <p>
                Terjadi kesalahan saat mengambil data.
                Silakan coba lagi.
            </p>
        `;
    }
}

loadProducts();