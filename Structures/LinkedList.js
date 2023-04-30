class ListNode {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
    /**
     * Преобразует данные ноды в строку.
     *
     * @return {string}.
     */
    toString(){
        return `${this.data}`
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    /**
     * Добавляет в конец новый узел списка.
     *
     * @param {any} data Данные для узла списка.
     * @return {this} this.
     */
    append(data){
        const node = new ListNode(data)
        if (!this.head && !this.tail) {
            this.head = node
            this.tail = node
            return this
        }
        this.tail.next = node
        this.tail = node
        return this
    }

    /**
     * Добавляет в начало новый узел списка.
     *
     * @param {data} data Данные для узла списка.
     * @return {this} this.
     */
    prepend(data){
        const node = new ListNode(data)
        if (!this.head && !this.tail) {
            this.head = node
            this.tail = node
            return this
        }
        const prevNode = this.head
        this.head = node
        this.head.next = prevNode
    }

    /**
     * Преобразует список в массив.
     *
     * @return {any[]}.
     */
    toArray() {
       const nodes = []
        while (this.head) {
           nodes.push(this.head.data)
            this.head = this.head.next
        }
        return nodes
    }
}
module.exports = {
    ListNode,
    LinkedList
}