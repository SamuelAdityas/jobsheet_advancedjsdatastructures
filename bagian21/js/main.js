import { state } from "./state.js";

import { fetchProducts } from "./api.js";

import { renderProducts } from "./ui.js";

import { sortProducts } from "./algorithms.js";


async function loadProducts() {

    try {

        state.status = "loading";

        console.log("Mengambil data produk...");

        const products = await fetchProducts();

        console.log("Data berhasil diambil:", products);

        state.products = products;

        state.status = "success";

        render();

    } catch (error) {

        state.status = "error";

        console.error(
            "Gagal mengambil produk:",
            error
        );

        const container =
            document.querySelector("#product-list");

        container.innerHTML = `
            <p>
                Gagal mengambil data produk.
            </p>
        `;
    }
}


function render() {

    let result = [...state.products];


    // Search

    if (state.search !== "") {

        result = result.filter(product =>
            product.title
                .toLowerCase()
                .includes(
                    state.search.toLowerCase()
                )
        );
    }


    // Category

    if (state.category !== "all") {

        result = result.filter(product =>
            product.category === state.category
        );
    }


    // Sorting

    result = sortProducts(
        result,
        state.sortBy
    );


    console.log("Produk yang dirender:", result);

    renderProducts(result);
}


// Search

document
    .querySelector("#search-input")
    .addEventListener("input", event => {

        state.search = event.target.value;

        render();
    });


// Category

document
    .querySelector("#category-select")
    .addEventListener("change", event => {

        state.category = event.target.value;

        render();
    });


// Sorting

document
    .querySelector("#sort-select")
    .addEventListener("change", event => {

        state.sortBy = event.target.value;

        render();
    });


// Jalankan aplikasi

loadProducts();