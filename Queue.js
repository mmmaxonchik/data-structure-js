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
    }

    /**
     * Преобразовывает очередь в массив значений
     *
     * @returns {any []}
     */
    toArray(){
        const dataArr = []
        while (this.first) {
            dataArr.push(this.first.data)
            this.first = this.first.next
        }
        return dataArr
    }

    /**
     * Статическое приватное свойство для метода toArray()
     * @type {any[]}
     */
    static #dataArr = []
    /**
     * Статический метод класса Queue, возвращает массив с данными из очереди.
     *
     * @param first - Параметром передается obj.first
     * @returns {any[]}
     */
    static toArray(first){
        if (first) {
            this.#dataArr.push(first.data)
            return this.toArray(first.next)
        }
        return this.#dataArr
    }
}

module.exports = {
    QueueNode,
    Queue
}
