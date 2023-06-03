class Queue {
    constructor() {
        this.queueData = []
    }

    enqueue(value) {
        this.queueData.push(value)
    }

    dequeue() {
        if (!this.isEmpty) {
            throw new Error("queue is empty")
        }
        
        return this.queueData.shift()
    }

    peek() {
        if (!this.isEmpty) {
            throw new Error("queue is empty")
        }
        
        return this.queueData[0]
    }

    contains(value) {
        if (!this.isEmpty) {
            throw new Error("queue is empty")
        }

        for (i = 0; i < this.size - 1; i++) {
            if (this.queueData[i] === value) {
                return true
            }
        }

        return false
    }

    isEmpty() {
        return this.size == 0
    }

    size() {
        return this.queueData.length
    }
}