import { state } from "./state.js";

import { fetchProducts } from "./api.js";

import {
    searchProducts,
    filterByCategory,
    sortProducts,
    getStatistics,
    getCategories,
    buildProductLookup,
    findProductById,
    hasOutOfStockProduct,
    allProductsHaveRating
} from "./algorithms.js";

import {
    renderStatus,
    renderProducts,
    renderStatistics,
    renderCategories
} from "./ui.js";

async function loadProducts() {

    state.status = "loading";
    renderStatus(state.status);

    try {

        const products = await fetchProducts();

        state.products = products;

        state.categories =
            getCategories(products);

        state.productLookup =
            buildProductLookup(products);

        state.status = "success";

        renderCategories(state.categories);

        render();

    } catch (error) {

        console.error(error);

        state.status = "error";

        renderStatus(state.status);
    }
}

function render() {

    let result = [...state.products];

    result = searchProducts(
        result,
        state.search
    );

    result = filterByCategory(
        result,
        state.category
    );

    result = sortProducts(
        result,
        state.sortBy
    );

    if (result.length === 0) {
        state.status = "empty";
    } else {
        state.status = "success";
    }

    renderStatus(state.status);

    renderProducts(result);

    const statistics =
        getStatistics(result);

    renderStatistics(statistics);
}

const searchInput =
    document.querySelector("#search-input");

searchInput.addEventListener("input", event => {

    state.search = event.target.value;

    render();
});

const categorySelect =
    document.querySelector("#category-select");

categorySelect.addEventListener("change", event => {

    state.category = event.target.value;

    render();
});

const sortSelect =
    document.querySelector("#sort-select");

sortSelect.addEventListener("change", event => {

    state.sortBy = event.target.value;

    render();
});

function testFind() {

    const product =
        findProductById(
            state.products,
            1
        );

    console.log("Hasil find:", product);
}

function testMap() {

    const product =
        state.productLookup.get(1);

    console.log("Hasil Map:", product);
}

function testSome() {

    const result =
        hasOutOfStockProduct(
            state.products
        );

    console.log(
        "Ada produk stock 0:",
        result
    );
}

function testEvery() {

    const result =
        allProductsHaveRating(
            state.products
        );

    console.log(
        "Semua produk memiliki rating:",
        result
    );
}

loadProducts().then(() => {

    testFind();
    testMap();
    testSome();
    testEvery();

});