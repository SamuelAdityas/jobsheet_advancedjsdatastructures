export function searchProducts(products, keyword) {
    if (!keyword.trim()) {
        return products;
    }

    const lowerKeyword = keyword.toLowerCase();

    return products.filter(product =>
        product.title.toLowerCase().includes(lowerKeyword)
    );
}

export function filterByCategory(products, category = "all") {
    if (category === "all") {
        return products;
    }

    return products.filter(product =>
        product.category === category
    );
}

export function sortProducts(products, sortBy) {
    const result = [...products];

    switch (sortBy) {

        case "price-asc":
            return result.sort((a, b) => a.price - b.price);

        case "price-desc":
            return result.sort((a, b) => b.price - a.price);

        case "rating":
            return result.sort((a, b) => b.rating - a.rating);

        case "title":
            return result.sort((a, b) =>
                a.title.localeCompare(b.title)
            );

        default:
            return result;
    }
}

export function getStatistics(products) {

    if (products.length === 0) {
        return {
            totalProducts: 0,
            averagePrice: 0,
            totalStock: 0,
            averageRating: 0
        };
    }

    const totalProducts = products.length;

    const averagePrice =
        products.reduce((total, product) => {
            return total + product.price;
        }, 0) / totalProducts;

    const totalStock =
        products.reduce((total, product) => {
            return total + product.stock;
        }, 0);

    const averageRating =
        products.reduce((total, product) => {
            return total + product.rating;
        }, 0) / totalProducts;

    return {
        totalProducts,
        averagePrice,
        totalStock,
        averageRating
    };
}

export function getCategories(products) {

    const categories = new Set();

    products.forEach(product => {
        categories.add(product.category);
    });

    return categories;
}

export function buildProductLookup(products) {

    const lookup = new Map();

    products.forEach(product => {
        lookup.set(product.id, product);
    });

    return lookup;
}

export function findProductById(products, id) {

    return products.find(product =>
        product.id === Number(id)
    );
}

export function hasOutOfStockProduct(products) {

    return products.some(product =>
        product.stock === 0
    );
}

export function allProductsHaveRating(products) {

    return products.every(product =>
        typeof product.rating === "number"
    );
}