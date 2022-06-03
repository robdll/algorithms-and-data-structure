class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++;
    }

    dequeue(element) {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }
}

const myQueue = new Queue();

myQueue.enqueue('some');
myQueue.enqueue('somemore');
myQueue.enqueue('another');
myQueue.enqueue('so many');

myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue)
