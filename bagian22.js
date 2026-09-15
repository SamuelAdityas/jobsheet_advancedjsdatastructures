const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data berhasil diambil");
    } else {
        reject("Terjadi error");
    }

});

promise
    .then((result) => {
        console.log("Hasil:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Promise selesai.\n");
    });

function getProducts() {
    return new Promise((resolve, reject) => {
        const success = true;

        setTimeout(() => {

            if (success) {

                const products = [
                    {
                        id: 1,
                        title: "Laptop",
                        price: 1200,
                        category: "electronics"
                    },
                    {
                        id: 2,
                        title: "Smartphone",
                        price: 800,
                        category: "electronics"
                    },
                    {
                        id: 3,
                        title: "Headphones",
                        price: 100,
                        category: "audio"
                    },
                    {
                        id: 4,
                        title: "Keyboard",
                        price: 75,
                        category: "accessories"
                    },
                    {
                        id: 5,
                        title: "Gaming Laptop",
                        price: 1500,
                        category: "electronics"
                    }
                ];

                resolve(products);

            } else {

                reject("Gagal mengambil data produk.");

            }

        }, 1000);

    });

}

console.log("Mengambil data produk...");

getProducts()

    .then((products) => {

        console.log("Data produk berhasil diambil.");
        console.log(`Jumlah produk: ${products.length}`);

        console.log("\nDaftar Produk:");
        console.table(products);

    })

    .catch((error) => {

        console.error("Terjadi error:", error);

    })

    .finally(() => {

        console.log("\nProses pengambilan data selesai.");

    });

function findProductById(id) {

    return getProducts()
        .then((products) => {

            const product = products.find((product) => product.id === id);

            if (product) {
                return product;
            }

            throw new Error(`Produk dengan ID ${id} tidak ditemukan.`);

        });

}

setTimeout(() => {

    console.log("\n------------------------------------------");
    console.log("Mencari produk dengan ID 3...");
    console.log("------------------------------------------");

    findProductById(3)

        .then((product) => {

            console.log("Produk ditemukan:");
            console.log(product);

        })

        .catch((error) => {

            console.error("Error:", error.message);

        })

        .finally(() => {

            console.log("Pencarian produk selesai.");

        });

}, 1200);

function simulateError() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            reject("Server sedang mengalami masalah.");

        }, 500);

    });

}

setTimeout(() => {

    console.log("\n------------------------------------------");
    console.log("Testing Promise Reject");
    console.log("------------------------------------------");

    simulateError()

        .then((result) => {

            console.log("Berhasil:", result);

        })

        .catch((error) => {

            console.error("Error:", error);

        })

        .finally(() => {

            console.log("Simulasi error selesai.");

        });

}, 2500);