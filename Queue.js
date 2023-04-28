class QueueNode {
    constructor(data, next = null) {
        this.data = data
        this.next = next

    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    /**
     * Записывает новую node в конец очереди
     *
     * @param data
     * @returns {Queue}
     */
    push (data) {
        const node = new QueueNode(data)
        if (!this.first) {
            this.first = node
            this.last = node
            this.length++
            return this
        }
        // Ниже с помощью last мы явно обаращемся к старой node и выписываем новую, старая до сих пор лежит в this.first
        this.last.next = node
        // Перезаписываем новую node
        this.last = node
        this.length++
        return this

    }
    /**
     * Извлекаем node из начала очереди
     *
     * @returns {Queue}
     */
    pop () {
        if (!this.first && !this.last) return this
        this.first = this.first.next
        this.length--
        if (this.length === 0) this.last = null
        return this
    }/**
     * Преобразовывает очередь в массив значений
     *
     * @returns {any []}
     */
    toArray(){
        const nodeArr = []
        let copy = JSON.parse(JSON.stringify(this))
        while (copy.first) {
            nodeArr.push(copy.first.data)
            copy.first = copy.first.next
        }
        copy = null
        return nodeArr
    }
}
module.exports = {
    QueueNode,
    Queue
}
