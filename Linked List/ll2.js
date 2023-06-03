class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    addNodeAtTail(value) {
        const node = new Node(value)
        
        node.next = null

        if (!this.head) {
            this.head = this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }

        this.length++
    }

    addNodeAtHead(value) {
        const node = new Node(value)
        
       if (!this.head) {
        this.head = this.tail = node
       }
       else {
        node.next = this.head
        this.head = node
       }

        this.length++
    }

    addNodeAtPosition(value, position) {
        const node = new Node(value)
        
        node.next = null
        let pos = 1
        let navigator = this.head

        if (navigator == null || position == 1) {
            print("No Elements")
            this.addNodeAtHead(value)
        }
        else {
            while (navigator != null) {
                if (pos == position - 1) {
                    node.next = navigator.next
                    navigator.next = node
                    break
                }

                navigator = navigator.next
                pos += 1
            }
        }

        this.length++
    }

    printList() {
        let navigator = this.head

        if (navigator == null) {
            console.log("No Elements")
        }
        else {
            while (navigator != null) {
                console.log(navigator.value)
                navigator = navigator.next
            }
        }
    }

    removeFromTail() {
        if (!this.head) return null

        let removedNode = this.tail

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        }
        else {
            let currentNode = this.head

            while (currentNode.next !== this.tail) {
                currentNode = currentNode.next
            }

            currentNode.next = null
            this.tail = currentNode
        }

        this.length--

        return removedNode.value
    }

    removeFromHead() {
        if (!this.head) return null

        let removedNode = this.head

        if (this.head === this.tail) {
            this.head = this.tail = null
        }
        else {
            this.head = this.head.next
            removedNode.next = null
        }

        this.length--

        return removedNode.value
    }

    search(value) {
        if (!this.head) return null

        let searchNode = this.head

        while (searchNode) {
            if (searchNode.value == value) {
                return searchNode
            }

            searchNode = searchNode.next
        }

        return null
    }

}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function createLinkedList() {
    const lList = new LinkedList()
    lList.addNodeAtTail("0")
    lList.addNodeAtTail("1")
    lList.addNodeAtTail("2")
    lList.addNodeAtTail("3")
    lList.addNodeAtTail("4")
    lList.addNodeAtHead("5")
    lList.addNodeAtPosition("6", 1)
    lList.addNodeAtPosition("7", 3)
    
    lList.removeFromTail()
    lList.removeFromHead()
    lList.printList()
    console.log(lList.search("7"))
}