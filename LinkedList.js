class ListNode {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
    toString(){
        return `${this.data}`
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    append(value){
        const node = new ListNode(value)
        if (!this.head && !this.tail) {
            this.head = node
            this.tail = node
            return this
        }
        this.tail.next = node
        this.tail = node
        return this
    }
    toArray() {
       const nodes = []
       let currentNode = this.head
        while (currentNode) {
           nodes.push(currentNode.toString())
           currentNode = currentNode.next
        }
        return nodes
    }
}

module.exports = {
    ListNode,
    LinkedList
}