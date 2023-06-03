// using Array
class Stack {
    constructor() {
        this.stackArray = []
    }

    // adds an element to stack
    push(value) {
        this.stackArray.push(value)
    }

    // removes and returns top element
    pop() {
        if (this.isEmpty()) {
            throw new Error("stack is empty")
        }
        
        return this.stackArray.pop()
    }

    // return top element in stack
    peek() {
        if (this.isEmpty()) {
            throw new Error("stack is empty")
        }
        
        return this.stackArray[this.size - 1]
    }

    clear() {
        this.stackArray = []
    }

    size() {
        return this.stackArray.length
    }

    isEmpty() {
        return this.size === 0
    }
}