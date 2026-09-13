class Stack {

    constructor() {

        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[
            this.items.length - 1
        ];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();

stack.push("laptop");
stack.push("phone");
stack.push("tablet");

console.log(
    "Isi Stack:"
);

console.log(stack.items);

console.log(
    "Elemen paling atas:"
);

console.log(stack.peek());

console.log(
    "Pop:"
);

console.log(stack.pop());

console.log(
    "Stack setelah pop:"
);

console.log(stack.items);

const searchHistory =
    new Stack();

function search(keyword) {

    searchHistory.push(keyword);

    console.log(
        `Mencari: ${keyword}`
    );
}

function undoSearch() {

    const removed =
        searchHistory.pop();

    if (searchHistory.isEmpty()) {

        console.log(
            "Tidak ada pencarian sebelumnya."
        );

        return;
    }

    console.log(
        `Undo: ${removed}`
    );

    console.log(
        `Kembali ke pencarian: ${
            searchHistory.peek()
        }`
    );
}

search("laptop");

search("phone");

search("tablet");

console.log(
    "Search History:"
);

console.log(
    searchHistory.items
);

undoSearch();

console.log(
    "Search History setelah undo:"
);

console.log(
    searchHistory.items
);