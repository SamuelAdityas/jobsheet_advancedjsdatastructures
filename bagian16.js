const numbers = Array.from(
    { length: 10000 },
    (_, index) => index + 1
);

function linearSearchCount(
    array,
    target
) {
    let steps = 0;

    for (
        let i = 0;
        i < array.length;
        i++
    ) {
        steps++;

        if (array[i] === target) {
            return {
                index: i,
                steps: steps
            };
        }
    }

    return {
        index: -1,
        steps: steps
    };
}

function binarySearchCount(
    array,
    target
) {

    let left = 0;

    let right =
        array.length - 1;

    let steps = 0;

    while (left <= right) {

        steps++;

        const mid =
            Math.floor(
                (left + right) / 2
            );

        if (array[mid] === target) {

            return {
                index: mid,
                steps: steps
            };
        }

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {
        index: -1,
        steps: steps
    };
}

const target = 10000;

const linearResult =
    linearSearchCount(
        numbers,
        target
    );

const binaryResult =
    binarySearchCount(
        numbers,
        target
    );

console.log(
    "=== Linear Search ==="
);

console.log(linearResult);

console.log(
    "\n=== Binary Search ==="
);

console.log(binaryResult);

const products = Array.from(
    { length: 1000 },
    (_, index) => ({

        id: index + 1,

        category:
            `category${index % 10}`

    })
);

function findPairsNested(
    products
) {

    let comparisons = 0;

    const pairs = [];

    for (
        let i = 0;
        i < products.length;
        i++
    ) {
        for (
            let j = i + 1;
            j < products.length;
            j++
        ) {

            comparisons++;

            if (
                products[i].category ===
                products[j].category
            ) {
                pairs.push([
                    products[i],
                    products[j]
                ]);
            }
        }
    }

    return {
        pairs: pairs,
        comparisons: comparisons
    };
}

function findPairsMap(
    products
) {

    const groups = new Map();

    let operations = 0;

    for (const product of products) {

        operations++;

        if (
            !groups.has(
                product.category
            )
        ) {

            groups.set(
                product.category,
                []
            );
        }

        groups
            .get(product.category)
            .push(product);
    }

    return {
        groups: groups,
        operations: operations
    };
}

const nestedResult =
    findPairsNested(products);

const mapResult =
    findPairsMap(products);

console.log(
    "\n=== Nested Loop ==="
);

console.log(
    "Jumlah perbandingan:",
    nestedResult.comparisons
);

console.log(
    "\n=== Map Grouping ==="
);

console.log(
    "Jumlah operasi:",
    mapResult.operations
);