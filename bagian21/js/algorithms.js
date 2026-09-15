export function sortProducts(
    products,
    sortBy
) {

    const result = [...products];


    switch (sortBy) {

        case "price-asc":

            return result.sort(
                (a, b) =>
                    a.price - b.price
            );


        case "price-desc":

            return result.sort(
                (a, b) =>
                    b.price - a.price
            );


        case "rating":

            return result.sort(
                (a, b) =>
                    b.rating - a.rating
            );


        case "title":

            return result.sort(
                (a, b) =>
                    a.title.localeCompare(
                        b.title
                    )
            );


        default:

            return result;
    }
}