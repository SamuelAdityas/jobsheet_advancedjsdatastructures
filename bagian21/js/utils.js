export function formatPrice(
    price
) {

    return `$${price.toLocaleString()}`;
}

export function average(
    numbers
) {
    if (
        numbers.length === 0
    ) {

        return 0;
    }

    return (
        numbers.reduce(
            (sum, number) =>
                sum + number,
            0
        ) /
        numbers.length
    );
}