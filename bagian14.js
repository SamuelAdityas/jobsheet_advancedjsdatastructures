class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

const queue = new Queue();

queue.enqueue("Request 1");

queue.enqueue("Request 2");

queue.enqueue("Request 3");

console.log(
    "Isi Queue:"
);

console.log(queue.items);

console.log(
    "Request paling depan:"
);

console.log(queue.peek());

console.log(
    "Dequeue:"
);

console.log(queue.dequeue());

console.log(
    "Queue setelah dequeue:"
);

console.log(queue.items);

const requestQueue =
    new Queue();

requestQueue.enqueue({
    id: 1,
    request: "Load Products"
});

requestQueue.enqueue({
    id: 2,
    request: "Load Categories"
});

requestQueue.enqueue({
    id: 3,
    request: "Load Statistics"
});

console.log(
    "Request Queue:"
);

console.log(
    requestQueue.items
);

console.log(
    "Memproses request:"
);

console.log(
    requestQueue.dequeue()
);

console.log(
    requestQueue.dequeue()
);

console.log(
    requestQueue.dequeue()
);