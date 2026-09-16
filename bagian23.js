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
                        category: "electronics",
                        stock: 15,
                        rating: 4.5
                    },
                    {
                        id: 2,
                        title: "Smartphone",
                        price: 800,
                        category: "electronics",
                        stock: 25,
                        rating: 4.2
                    },
                    {
                        id: 3,
                        title: "Headphones",
                        price: 100,
                        category: "audio",
                        stock: 40,
                        rating: 4.0
                    },
                    {
                        id: 4,
                        title: "Keyboard",
                        price: 75,
                        category: "accessories",
                        stock: 30,
                        rating: 4.1
                    },
                    {
                        id: 5,
                        title: "Gaming Laptop",
                        price: 1500,
                        category: "electronics",
                        stock: 10,
                        rating: 4.8
                    }
                ];

                resolve(products);

            } else {

                reject(new Error("Gagal mengambil data produk."));

            }

        }, 1000);

    });

}

async function loadProducts() {

    try {

        console.log("Mengambil data produk...");

        const products = await getProducts();

        console.log("Data berhasil diambil.");
        console.log(`Jumlah produk: ${products.length}`);

        return products;

    } catch (error) {

        console.error("Terjadi error:", error.message);

    } finally {

        console.log("Proses selesai.");
    }
}

loadProducts()
    .then((products) => {
        if (products) {
            console.log("\nDaftar Produk:");
            console.table(products);
        }
    });