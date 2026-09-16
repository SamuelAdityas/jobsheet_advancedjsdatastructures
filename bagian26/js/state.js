export const state = {
    products: [],
    search: "",
    category: "all",
    sortBy: "default",
    status: "idle",

    categories: new Set(),
    productLookup: new Map()
};