const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        stock: 10,
        rating: 4.5,
        dimensions: {
            width: 30
        }
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        stock: 20,
        rating: 4.2,
        dimensions: {
            width: 10
        }
    },
    {
        id: 3,
        title: "Keyboard",
        price: 100,
        stock: 15,
        rating: 4.0
    }
];

const product = products[0];

const label =
    `${product.title} - $${product.price}`;

console.log(
    "Template Literal:"
);

console.log(label);

const getTitle =
    (product) =>
        product.title;

console.log(
    "\nArrow Function:"
);

console.log(
    getTitle(product)
);

const {
    title,
    price,
    category = "Tidak ada kategori"
} = product;

console.log(
    "\nDestructuring:"
);

console.log(title);

console.log(price);

console.log(category);

const [
    firstProduct,
    ...restProducts
] = products;

console.log(
    "\nFirst Product:"
);

console.log(firstProduct);

console.log(
    "\nRest Products:"
);

console.log(restProducts);

const updatedProduct = {

    ...product,

    stock: 20
};

console.log(
    "\nUpdated Product:"
);

console.log(updatedProduct);

const newProduct = {

    id: 4,

    title: "Mouse",

    price: 50,

    stock: 30,

    rating: 4.1
};

const merged = [

    ...products,

    newProduct
];

console.log(
    "\nMerged Products:"
);

console.log(merged);

function sumPrices(...prices) {
    return prices.reduce(
        (a, b) =>
            a + b,
        0
    );
}

console.log(
    "\nSum Prices:"
);

console.log(
    sumPrices(
        100,
        200,
        300
    )
);

const width =
    product.dimensions?.width ??
    "Tidak diketahui";

console.log(
    "\nWidth:"
);

console.log(width);

const keyboard =
    products[2];

const keyboardWidth =
    keyboard.dimensions?.width ??
    "Tidak diketahui";

console.log(
    "\nKeyboard Width:"
);

console.log(keyboardWidth);

function filterByCategory(
    products,
    category = "all"
) {

    if (category === "all") {
        return products;
    }

    return products.filter(
        product =>
            product.category ===
            category
    );
}

console.log(
    "\nDefault Parameter:"
);

console.log(
    filterByCategory(products)
);